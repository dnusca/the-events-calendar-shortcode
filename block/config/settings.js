import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting';
import MonthSetting from '../components/monthSetting';
import PastSetting from '../components/pastSetting';
import KeyValueSetting from '../components/keyValueSetting';

const { __ } = wp.i18n;
const textDomain = 'the-events-calendar-shortcode';

const config = {
	design: {
		component: DesignSetting,
		label: __( 'Design', textDomain ),
		removable: false,
	},
	limit: {
		component: LimitSetting,
		label: __( 'Limit', textDomain ),
		removable: false,
	},
	cat: {
		component: CategorySetting,
		label: __( 'Category', textDomain ),
		removable: true,
	},
	month: {
		component: MonthSetting,
		label: __( 'Month', textDomain ),
		removable: true,
	},
	past: {
		component: PastSetting,
		label: __( 'Past', textDomain ),
		removable: true,
	},
	other: {
		component: KeyValueSetting,
		label: __( 'Other', textDomain ),
		removable: true,
	},
};

export default config;
