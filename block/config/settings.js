import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting';
import MonthSetting from '../components/monthSetting';
import ExcerptSetting from '../components/excerptSetting';
import PastSetting from '../components/pastSetting';
import ThumbnailSetting from '../components/thumbnailSetting';
import OrderBySetting from '../components/orderBySetting';
import OrderSetting from '../components/orderSetting';
import KeyValueSetting from '../components/keyValueSetting';
import VenueSetting from "../components/venueSetting";

const { __ } = wp.i18n;

const config = {
	design: {
		component: DesignSetting,
		label: __( 'Design', 'the-events-calendar-shortcode' ),
		removable: false,
	},
	limit: {
		component: LimitSetting,
		label: __( 'Number of Events', 'the-events-calendar-shortcode' ),
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
	excerpt: {
		component: ExcerptSetting,
		label: __( 'Excerpt (Short Description)', 'the-events-calendar-shortcode' ),
		removable: true,
	},
    thumb: {
        component: ThumbnailSetting,
        label: __( 'Thumbnail', 'the-events-calendar-shortcode' ),
        removable: true,
    },
	venue: {
		component: VenueSetting,
		label: __( 'Venue', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	past: {
		component: PastSetting,
		label: __( 'Past Events', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	orderby: {
		component: OrderBySetting,
		label: __( 'Order By', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	order: {
		component: OrderSetting,
		label: __( 'Order', 'the-events-calendar-shortcode' ),
		removable: true,
	},
	other: {
		component: KeyValueSetting,
		label: __( 'Advanced/Other', 'the-events-calendar-shortcode' ),
		removable: true,
	},
};

export default config;
