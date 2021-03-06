import Backbone from 'backbone'
import {ContestCollection} from './models/contestModel'

var STORE = Object.assign({}, Backbone.Events, {
	data: {
		contestCollection: new ContestCollection(),

		// LOADING ICON
		loadingGif: true,

		// STAT BUTTON STATES
		showAllStats: true,
		showQBStats:  false,
		showRBStats:  false,
		showWRStats:  false,
		showTEStats:  false,
		showDFStats:  false,
		// Year
		showCurrentSeason:    true,
		showCurrentSeasonPPG: true,
		showLastSeasonPPG:    true,
		// BG Colors
		allButtonColor: 'linear-gradient(#336D9F, #004080)',
		qbButtonColor:  '',
		rbButtonColor:  '',
		wrButtonColor:  '',
		teButtonColor:  '',
		dfButtonColor:  '',
		ppgButtonColor: 'linear-gradient(#336D9F, #004080)',
		ttlButtonColor: '',
		csButtonColor:  'linear-gradient(#336D9F, #004080)',
		lsButtonColor:  '',
		// Font Colors
		allButtonFontColor: '#FFF',
		qbButtonFontColor:  '',
		rbButtonFontColor:  '',
		wrButtonFontColor:  '',
		teButtonFontColor:  '',
		dfButtonFontColor:  '',
		ppgButtonFontColor: '#FFF',
		ttlButtonFontColor: '',
		csButtonFontColor:  '#FFF',
		lsButtonFontColor:  '',

		// DEFENSIVE BUTTON STATES
		showQBDef: true,
		showRBDef: false,
		showWRDef: false,
		showTEDef: false,
		showDFDef: false,
		// Year
		showCurrentDefense:    true,
		showCurrentDefensePPG: true,
		showLastDefensePPG:    true,
		// Colors
		qbDefButtonColor:  'linear-gradient(#336D9F, #004080)',
		rbDefButtonColor:  '',
		wrDefButtonColor:  '',
		teDefButtonColor:  '',
		dfDefButtonColor:  '',
		ppgDefButtonColor: 'linear-gradient(#336D9F, #004080)',
		ttlDefButtonColor: '',
		csDefButtonColor:  'linear-gradient(#336D9F, #004080)',
		lsDefButtonColor:  '',
		qbDefButtonFontColor:  '#FFF',
		rbDefButtonFontColor:  '',
		wrDefButtonFontColor:  '',
		teDefButtonFontColor:  '',
		dfDefButtonFontColor:  '',
		ppgDefButtonFontColor: '#FFF',
		ttlDefButtonFontColor: '',
		csDefButtonFontColor:  '#FFF',
		lsDefButtonFontColor:  '',

		// CHEATSHEET BUTTON STATES
		showQBCheat: true,
		showRBCheat: false,
		showWRCheat: false,
		showTECheat: false,
		showDFCheat: false,
		// BG Colors
		qbCheatButtonColor:  'linear-gradient(#336D9F, #004080)',
		rbCheatButtonColor:  '',
		wrCheatButtonColor:  '',
		teCheatButtonColor:  '',
		dfCheatButtonColor:  '',
		// Font Colors
		qbCheatButtonFontColor:  '#FFF',
		rbCheatButtonFontColor:  '',
		wrCheatButtonFontColor:  '',
		teCheatButtonFontColor:  '',
		dfCheatButtonFontColor:  '',

		qbAnalyzer: {},
		rbAnalyzer: {},
		wrAnalyzer: {},
		teAnalyzer: {},
		dfAnalyzer: {},

		infoModal: false,

    // PICK STATES
		showQBPicks: true,
		showRBPicks: false,
		showWRPicks: false,
		showTEPicks: false,
		showDFPicks: false,
    // BG Colors
		qbPicksButtonColor:  'linear-gradient(#336D9F, #004080)',
		rbPicksButtonColor:  '',
		wrPicksButtonColor:  '',
		tePicksButtonColor:  '',
		dfPicksButtonColor:  '',
		// Font Colors
		qbPicksButtonFontColor:  '#FFF',
		rbPicksButtonFontColor:  '',
		wrPicksButtonFontColor:  '',
		tePicksButtonFontColor:  '',
		dfPicksButtonFontColor:  '',

    bankroll: {},
    showPlannerButtons: true,
    showCasualPlanner: false,
    showModeratePlanner: false,
    showAggressivePlanner: false,

    plannerError: false,
    error: ""
	},
	get: function(prop) {
		return this.data[prop]
	},
	set: function(attrs) {
		this.data = Object.assign(this.data, attrs)
		this.trigger('dataUpdated')
	}
})

export default STORE
