export const ENV = 'prod'; // dev || prod
export const SERVER_PORT =  parseInt(window.location.href.split(':').pop().split('/')[0]) + 5000;
export const BASE_URL = ENV === 'dev' ? `http://vertexsoft.net:${SERVER_PORT}` : `http://${window.location.hostname}:${SERVER_PORT}`;
export const API_ENDPOINT = `${BASE_URL}`;
export const SEARCH_LIMIT = 20;
export const port = SERVER_PORT;


const BASE_ENDPOINTS = {
  DASHBOARD: `/dashboard`,
};

export const ENDPOINTS = {
  LOGIN: 'api/login/',
  IS_LOGGED_IN:'api/is_logged_in/',
  REGISTRATION: 'registration/',
  POST_ALL_MSNS_IDS: `${BASE_ENDPOINTS.DASHBOARD}/post_check_online_status/`,
  POST_ANALYSIS_RAW_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_analysis_raw_data/`,
  POST_ANALYSIS_HOURLY_CONSUMPTION_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_analysis_hourly_consumption_data/`,
  POST_ANALYSIS_DAILY_CONSUMPTION_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_analysis_daily_consumption_data/`,
  POST_ANALYSIS_MONTHLY_CONSUMPTION_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_analysis_monthly_consumption_data/`,
  POST_EDIT_DEVICE_SCHEDULES_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_editable_device_schedules_data/`,
  POST_ADD_NEW_DEVICE_SCHEDULED_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_add_new_device_scheduled_data/`,
  POST_ADD_NEW_DEVICE_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_add_new_device_data/`,
  POST_ADD_NEW_USER_GROUP_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_add_new_user_group_data/`,
  POST_EDIT_USER_GROUP_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_edit_user_group_data/`,
  POST_ADD_NEW_USER_PERMISSION_DATA: `${BASE_ENDPOINTS.DASHBOARD}/post_add_new_user_permission_data/`,
  DEVICE_CHILD_NODES: `${BASE_ENDPOINTS.DASHBOARD}/get_dim_device_child_nodes/`,
  DATE_CHILD_NODES: `${BASE_ENDPOINTS.DASHBOARD}/get_dim_date_child_nodes/`,
  OBIS_CHILD_NODES: `${BASE_ENDPOINTS.DASHBOARD}/get_dim_obis_child_nodes/`,
  DEVICE_SEARCH: `${BASE_ENDPOINTS.DASHBOARD}/device_search/`,
  DEVICE_SCHEDULES_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_device_schedules_data/`,
  DEVICE_SCHEDULE_COMMANDS_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_device_schedule_commands_data/`,
  GET_DEVICE_INFO: `${BASE_ENDPOINTS.DASHBOARD}/get_device_info/`,
  GET_ALL_DEVICES: `${BASE_ENDPOINTS.DASHBOARD}/get_all_devices/`,
  GRAPH_DATA: `${BASE_ENDPOINTS.DASHBOARD}/graph_data/`,
  MON_BILLING_DATA: `${BASE_ENDPOINTS.DASHBOARD}/mon_billing_data`,
  BILLING_DATA: `${BASE_ENDPOINTS.DASHBOARD}/billing_data`,
  INSTANTANEOUS_DATA: `${BASE_ENDPOINTS.DASHBOARD}/instantaneous_data`,
  EVENT_DATA: `${BASE_ENDPOINTS.DASHBOARD}/events_data`,
  ON_DEMAND_READING: `${BASE_ENDPOINTS.DASHBOARD}/on_demand_reading/`,
  GET_DEVICE_PARAM: `${BASE_ENDPOINTS.DASHBOARD}/get_device_param_value/`,
  GET_EVENT_COUNT: `${BASE_ENDPOINTS.DASHBOARD}/get_event_count/`,
  GET_EVENTS: `${BASE_ENDPOINTS.DASHBOARD}/get_events/`,
  GET_ALL_USERS_LIST_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_users_list/`,
  GET_ALL_USERS_PERMISSIONS_LIST_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_users_permissions_list/`,
  GET_USER_PERMISSIONS_CODE_NAMES_LIST_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_user_permissions_code_names_data/`,
  GET_ALL_USERS_GROUPS_LIST_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_all_users_groups_data/`,
  GET_ALL_METERS_LIST_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_all_meters_list/`,
  GET_DIM_TCP_PORT_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_dim_tcp_port_data/`,
  GET_DIM_DEVICE_MODEL_DATA: `${BASE_ENDPOINTS.DASHBOARD}/get_dim_device_model_data/`,

};
