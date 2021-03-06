import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../../store'

var CurrentAllStats = React.createClass({
  	render: function() {
    	if (this.props.showAllStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body  data={this.props.seasonAllData}/>
			        </table>
	      		</div>
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
      	<thead>
	        <tr>
				<th id='widen-th' >PLAYER<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>TEAM<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>POS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>GP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PATT<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>PCMP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>PTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PINT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PA%<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>RUATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REC<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REYRD<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RETDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>FPTS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
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

export default CurrentAllStats