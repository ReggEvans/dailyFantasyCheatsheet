import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import AllTable from '../components/allTable'
import ReactTooltip from 'react-tooltip'

var seasonAllData = require('../../../data.json').alldata

var CurrentSeasonAllTotal = React.createClass({
  	render: function() {
  		// Hide All table if All Button is not active
  		if (this.props.showAllStats === false) {
    		return null
    	}
    	if (seasonAllData.length < 2) {
    		return (
    			<div className='no-data'>
    				<h4>There are currently no stats to display</h4>
		            <p>
		              Check back after the season has started<br />
		              or select 'Last Season' above to view last season's stats.
		            </p>
    			</div>
    		)
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonAllData}/>
			        </table>
	      		</div>
	      		<ReactTooltip place="bottom" effect="solid" multiline={true} offset={{bottom: 20, right: 9}}/>
	      </div>
	    ) 
	}
})

var Headers = React.createClass({
  componentDidMount: function() {
    $("#complete").tablesorter();
  },
  render: function () {
    return (
      	<AllTable />
    )
  }
})

var Body = React.createClass({
  render: function() {
  	var preSortedData = this.props.data.sort(function(a,b){return b.fpts - a.fpts})
    return (
      <tbody>
        {preSortedData.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left'>{player.player}</td> 
				<td>{player.team}</td>
				<td>{player.pos}</td>
				<td>{player.gp}</td>
				<td>{player.att}</td>
				<td>{player.cmp}</td>
				<td>{player.payds}</td>
				<td>{player.patd}</td>
				<td>{player.int}</td>
				<td>{player.pct}</td>
				<td>{player.ruatt}</td>
				<td>{player.ruyds}</td>
				<td>{player.rutd}</td>
				<td>{player.rec}</td>
				<td>{player.reyds}</td>
				<td>{player.retd}</td>
				<td>{player.fpts}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default CurrentSeasonAllTotal