import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'

var qbDefense = require('../../../data.json').qbDefenseLastSeason

var LastDefenseQBPPG = React.createClass({
  	render: function() {
  		// Hide QB table if QB Button is not active
  		if (this.props.showQBDef === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={qbDefense}/>
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
				<th id='widen-th' >TEAM<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>GP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>ATT<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>CMP<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>PAYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PATDS<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>INT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
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
                <td id='align-left'>{player.team}</td> 
				<td>{player.gp}</td>
				<td>{(player.att/player.gp).toFixed(2)}</td>
				<td>{(player.cmp/player.gp).toFixed(2)}</td>
				<td>{(player.payds/player.gp).toFixed(2)}</td>
				<td>{(player.patd/player.gp).toFixed(2)}</td>
				<td>{(player.int/player.gp).toFixed(2)}</td>
				<td>{(player.ruatt/player.gp).toFixed(2)}</td>
				<td>{(player.ruyds/player.gp).toFixed(2)}</td>
				<td>{(player.rutd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastDefenseQBPPG