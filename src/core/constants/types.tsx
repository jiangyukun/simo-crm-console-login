function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorValueFromKey(prefix: string, obj: object): void {
  let typeFn = getActionTypeFn(prefix)
  Object.keys(obj).forEach(key => obj[key] = typeFn(key))
}

export const APP = {
  FETCH_BD: null,
  FETCH_BDPC: null,
  FETCH_OPERATION_HISTORY_LIST: null,
}

export const TODO_REMIND = {
  FETCH_LIST: null,
  FETCH_MY_LIST: null,
  FETCH_COMPLETE_LIST: null,
  FETCH_USER_CATEGORY_INFO: null,
  FETCH_RELEVANT_ITEM_LIST: null,
  SEND_REMIND: null,

}

export const CLIENTS = {
  FETCH_LIST: null,
  FETCH_BD_LIST: null,
  ADD_CUSTOMER: null,
  UPDATE_CUSTOMER: null,
  FETCH_CUSTOMER_INFO: null,
  UPDATE_BD_AND_BDPC: null,

  ADD_SUB_COMPANY: null,
  UPDATE_SUB_COMPANY: null,
  REMOVE_SUB_COMPANY: null,

  ADD_CONTACT: null,
  UPDATE_CONTACT: null,
  REMOVE_CONTACT: null,

  FETCH_CDA_LIST: null,
  FETCH_CDA_DETAIL: null,
  ADD_CDA: null,
  UPDATE_CDA: null,
  REMOVE_CDA: null,
  FETCH_PROJECT_LIST: null,
  FETCH_CONTACT_LIST: null,

  ADD_SUPPLIER: null,
  UPDATE_SUPPLIER: null,
  FETCH_MSA_LIST: null,
  ADD_MSA: null,
  UPDATE_MSA: null,

  FETCH_RFI_LIST: null,
  ADD_RFI: null,
  UPDATE_RFI: null,
  REMOVE_RFI: null,

  FETCH_VISIT_RECORD_LIST: null,
  ADD_VISIT_RECORD: null,
  UPDATE_VISIT_RECORD: null,
  REMOVE_VISIT_RECORD: null,
  UPDATE_REMARK_AND_ATTACHMENT: null,
}

export const PROJECT = {
  FETCH_LIST: null,
  FETCH_PROJECT_DETAIL: null,
  UPDATE_BD_AND_BDPC: null,
  FETCH_CLIENT_LIST: null,
  ADD_PROJECT_INFO: null,
  UPDATE_PROJECT_INFO: null,
  ADD_BEFORE_QUOTATION: null,
  UPDATE_BEFORE_QUOTATION: null,
  ADD_AFTER_QUOTATION: null,
  UPDATE_AFTER_QUOTATION: null,
  UPDATE_REMARK_ATTACHMENT: null,

}

export const CONTRACT = {
  FETCH_LIST: null,
  FETCH_CONTRACT_DETAIL: null,
  FETCH_PROJECT_LIST: null,
  UPDATE_BD_AND_BDPC: null,
  FETCH_CONTRACT_CODE_PREFIX: null,
  ADD_CONTRACT: null,
  UPDATE_CONTRACT: null,
  ADD_BEFORE_SIGN: null,
  UPDATE_BEFORE_SIGN: null,
  FETCH_PART_AFTER_SIGN_INFO_FROM_PROJECT: null,
  ADD_AFTER_SIGN: null,
  UPDATE_AFTER_SIGN: null,
  FETCH_COLLECTION_LIST: null,
  UPDATE_COLLECTION: null,
  FETCH_INSTITUTION_LIST: null,
  FETCH_INSTITUTION_INFO: null,

}

export const RECYCLE_BIN = {
  FETCH_LIST: null,
  FETCH_DETAIL: null,
}

export const ACCOUNT_MANAGE = {
  FETCH_LIST: null,
  ADD_ACCOUNT: null,
  UPDATE_ACCOUNT: null,
  DISABLE_ACCOUNT: null,
  RESET_PASSWORD: null,
}

generatorValueFromKey('APP', APP)
generatorValueFromKey('TODO_REMIND', TODO_REMIND)
generatorValueFromKey('PROJECT', PROJECT)
generatorValueFromKey('CLIENTS', CLIENTS)
generatorValueFromKey('CONTRACT', CONTRACT)
generatorValueFromKey('RECYCLE_BIN', RECYCLE_BIN)
generatorValueFromKey('ACCOUNT_MANAGE', ACCOUNT_MANAGE)
