import API from './index';
import ErrorObject from './ErrorObject';
import { ENDPOINTS } from './config';

const api = new API();

export async function getDeviceInfo(id) {
  try {
    return await api.get(`${ENDPOINTS.GET_DEVICE_INFO}?id=${id}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getDeviceInfoWithGroupNodes() {
  try {
    return await api.get(`${ENDPOINTS.GET_DEVICE_INFO}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function getTcpPortData() {
  try {
    return await api.get(`${ENDPOINTS.GET_DIM_TCP_PORT_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getDeviceModelData() {  
  try {
    return await api.get(`${ENDPOINTS.GET_DIM_DEVICE_MODEL_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}



export async function searchDevices(search_param, search_limit, offset, type, parent_id) {
  try {
    return await api.get(`${ENDPOINTS.DEVICE_SEARCH}?search_param=${search_param}&limit_param=${search_limit}&offset=${offset}&type=${type}&parent_id=${parent_id}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function GetDeviceSchedulesModelData(deviceId, offset, limit) {
  try {
    return await api.get(`${ENDPOINTS.DEVICE_SCHEDULES_DATA}?device_id=${deviceId}&offset=${offset}&limit_param=${limit}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function GetDeviceScheduleCommandsData(scheduleId) {
  try {
    return await api.get(`${ENDPOINTS.DEVICE_SCHEDULE_COMMANDS_DATA}?schedule_id=${scheduleId}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function get_dim_device_child_nodes(parent_id, SEARCH_LIMIT, offset, user_meter_devices, last_msn_id ) {
  try {
    return await api.get(`${ENDPOINTS.DEVICE_CHILD_NODES}?parent_id=${parent_id}&limit_param=${SEARCH_LIMIT}&offset=${offset}&user_group_meters=${user_meter_devices}&last_msn_id=${last_msn_id}` );
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function get_date_model_child_nodes(year, month, off_set, SEARCH_LIMIT) {
  try {
    return await api.get(`${ENDPOINTS.DATE_CHILD_NODES}?year_actual=${year}&month_actual=${month}&limit_param=${SEARCH_LIMIT}&offset=${off_set}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function get_obis_model_child_nodes(dev_id) {  //prev is category, off_set, SEARCH_LIMIT
  try {
    return await api.get(`${ENDPOINTS.OBIS_CHILD_NODES}?device_id=${dev_id}`); //prev is ?category=${category}&limit_param=${SEARCH_LIMIT}&offset=${off_set}
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getAllDevices() {
  try {
    return await api.get(`${ENDPOINTS.GET_ALL_DEVICES}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getMonthlyBillingData() {
  try {
    return await api.get(`${ENDPOINTS.MON_BILLING_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getBillingData() {
  try {
    return await api.get(`${ENDPOINTS.BILLING_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getInstantaneousData() {
  try {
    return await api.get(`${ENDPOINTS.INSTANTANEOUS_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getGraphData() {
  try {
    return await api.get(`${ENDPOINTS.GRAPH_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function getEventData() {
  try {
    return await api.get(`${ENDPOINTS.EVENT_DATA}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function GetUsersListData(offset, SEARCH_LIMIT) {  
  try {
    return await api.get(`${ENDPOINTS.GET_ALL_USERS_LIST_DATA}?offset=${offset}&limit_param=${SEARCH_LIMIT}`);
  } catch (error) {
    return new ErrorObject(error);
  }
} 


export async function GetAllUsersGroups(offset, SEARCH_LIMIT) {  
  try {
    return await api.get(`${ENDPOINTS.GET_ALL_USERS_GROUPS_LIST_DATA}?offset=${offset}&limit_param=${SEARCH_LIMIT}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function GetUsersPermissionsListData(content_type_id) {  
  try {
    return await api.get(`${ENDPOINTS.GET_ALL_USERS_PERMISSIONS_LIST_DATA}?content_type_id=${content_type_id}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function getUserPermissionsCodeNamesDataList(user_email, group_id) {  
  try {
    return await api.get(`${ENDPOINTS.GET_USER_PERMISSIONS_CODE_NAMES_LIST_DATA}?useremail=${user_email}&group_id=${group_id}`);
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function GetMetersListData(offset, SEARCH_LIMIT, last_msn_id) {  
  try {
    return await api.get(`${ENDPOINTS.GET_ALL_METERS_LIST_DATA}?offset=${offset}&limit_param=${SEARCH_LIMIT}&last_msn_id=${last_msn_id}`);
  } catch (error) {
    return new ErrorObject(error);
  }
} 

export async function PostAllMsnsIds(msnsdata) {
  try {
    return await api.post(ENDPOINTS.POST_ALL_MSNS_IDS, {
      msnsdata
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostAnalysisRawData(postanalysisrawdata) {
  try {
    return await api.post(ENDPOINTS.POST_ANALYSIS_RAW_DATA, {
      postanalysisrawdata
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostAnalysisHourlyConsumptionData(post_analysis_hourly_consumption) {
  try {
    return await api.post(ENDPOINTS.POST_ANALYSIS_HOURLY_CONSUMPTION_DATA, {
      post_analysis_hourly_consumption
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostAnalysisDailyConsumptionData(post_analysis_daily_consumption) {
  try {
    return await api.post(ENDPOINTS.POST_ANALYSIS_DAILY_CONSUMPTION_DATA, {
      post_analysis_daily_consumption
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function PostAnalysisMonthlyConsumptionData(post_analysis_monthly_consumption) {
  try {
    return await api.post(ENDPOINTS.POST_ANALYSIS_MONTHLY_CONSUMPTION_DATA, {
      post_analysis_monthly_consumption
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostEditDeviceSchedulesFormData(post_edit_device_schedules_form_data) {
  try {
    return await api.post(ENDPOINTS.POST_EDIT_DEVICE_SCHEDULES_DATA, {
      post_edit_device_schedules_form_data
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function PostAddNewDeviceScheduledFormData(post_add_new_device_scheduled_form_data) {
  try {
    return await api.post(ENDPOINTS.POST_ADD_NEW_DEVICE_SCHEDULED_DATA, {
      post_add_new_device_scheduled_form_data
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostAddNewDeviceFormData(post_add_new_device_form_data) {
  try {
    return await api.post_custom(ENDPOINTS.POST_ADD_NEW_DEVICE_DATA, {
      post_add_new_device_form_data
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostAddNewUserGroupFormData(post_add_new_user_group_form_data, selected_permissions, permissions_ids, users_ids, meters_ids ) {
  try {
    return await api.post_custom(ENDPOINTS.POST_ADD_NEW_USER_GROUP_DATA, {
      post_add_new_user_group_form_data, selected_permissions, permissions_ids, users_ids, meters_ids,
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}


export async function PostEditUserGroupFormData(post_edit_user_group_form_data, selected_permissions, permissions_ids, users_ids, meters_ids ) {
  try {
    return await api.post_custom(ENDPOINTS.POST_EDIT_USER_GROUP_DATA, {
      post_edit_user_group_form_data, selected_permissions, permissions_ids, users_ids, meters_ids
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}

export async function PostAddNewUserPermissionFormData(post_add_new_user_permissions_form_data, selected_user_id ) {
  try {
    return await api.post_custom(ENDPOINTS.POST_ADD_NEW_USER_PERMISSION_DATA, {
      post_add_new_user_permissions_form_data, selected_user_id
      
    });
  } catch (error) {
    return new ErrorObject(error);
  }
}








