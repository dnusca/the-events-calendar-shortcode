import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting';
import MonthSetting from '../components/monthSetting';
import PastSetting from '../components/pastSetting';
import KeyValueSetting from '../components/keyValueSetting';

const { __ } = wp.i18n;

const config = {
	design: {
		component: DesignSetting,
		label: __( 'Design', 'the-events-calendar-shortcode' ),
		removable: false,
	},
	limit: {
		component: LimitSetting,
		label: __( 'Limit', 'the-events-calendar-shortcode' ),
		removable: false,
	},
	cat: {
		component: CategorySetting,
		label: __( 'Category', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	month: {
		component: MonthSetting,
		label: __( 'Month', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	past: {
		component: PastSetting,
		label: __( 'Past', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	other: {
		component: KeyValueSetting,
		label: __( 'Other', 'the-events-calendar-shortcode' ),
		removable: true,
	},
};

export default config;
