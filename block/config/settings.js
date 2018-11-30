import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting';
import MonthSetting from '../components/monthSetting';
import PastSetting from '../components/pastSetting';

const { __ } = wp.i18n;

const config = {
	design: {
		component: DesignSetting,
		label: __( 'Design' ),
		removable: false,
	},
	limit: {
		component: LimitSetting,
		label: __( 'Limit' ),
		removable: false,
	},
	cat: {
		component: CategorySetting,
		label: __( 'Category' ),
		removable: true,
	},
	month: {
		component: MonthSetting,
		label: __( 'Month' ),
		removable: true,
	},
	past: {
		component: PastSetting,
		label: __( 'Past' ),
		removable: true,
	},
};

export default config;
