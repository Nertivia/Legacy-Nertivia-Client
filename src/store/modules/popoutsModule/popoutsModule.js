import axios from "axios";
import Vue from "vue";
import { bus } from "@/main";
import VueRouter from "vue-router";
import NotificationSounds from "@/utils/notificationSound";

const state = {
  fileToUpload: null,
  uploadDialog: false,
  ImagePreviewURL: null,

  serverIDContextMenu: null,
  showServerInviteMenu: false,

  userInformationPopoutID: null,

  surveyPopout: false,
  dragDropFileUploadDialog: false,
  settings: false,
  GDLinkMenu: false,
  addServer: false,

  genericMessage: null,

  serverSettings: {
    serverID: null,
    index: null
  },
  editMessage: null,
  messageContextMenu: {
    messageID: null,
    message: null,
    channelID: null,
    uniqueID: null,
    x: null,
    y: null
  },
  serverMemberContext: {
    serverID: null,
    uniqueID: null,
    x: null,
    y: null
  },

  // TODO: convert all above into one.
  allPopout: {
    show: false,
    type: null,
    serverID: null,
    uniqueID: null,
    creatorUniqueID: null,
    x: null,
    y: null
  }
};

const getters = {
  popouts(state) {
    return state;
  }
};

const actions = {
  setAllPopout({ commit, state }, data) {
    commit("setAllPopout", { ...state.allPopout, ...data });
  },
  setServerSettings({ commit }, { serverID, index }) {
    commit("setServerSettings", { serverID, index });
  },
  setUserInformationPopout({ commit }, id) {
    commit("setUserInformationPopout", id);
  },
  setPopoutVisibility(context, data) {
    context.commit("setPopoutVisibility", data);
  },
  setFile(context, file) {
    context.commit("setFileToUpload", file);
  },
  setImagePreviewURL(context, url) {
    context.commit("setImagePreviewURL", url);
  },
  setServerIDContextMenu(context, serverID) {
    context.commit("setServerIDContextMenu", serverID);
  },
  setGenericMessage(context, message) {
    context.commit("setGenericMessage", message);
  },
  setEditMessage(context, data) {
    context.commit("setEditMessage", data);
  },
  setMessageContext(
    context,
    { messageID, x, y, channelID, message, uniqueID, type, color }
  ) {
    context.commit("setMessageContext", {
      messageID,
      x,
      y,
      channelID,
      message,
      uniqueID,
      type,
      color
    });
  },
  setServerMemberContext(context, { uniqueID, x, y, serverID }) {
    context.commit("setServerMemberContext", { uniqueID, x, y, serverID });
  }
};

const mutations = {
  setAllPopout(state, data) {
    Vue.set(state, "allPopout", data);
  },
  setServerMemberContext(state, data) {
    Vue.set(state, "serverMemberContext", data);
  },
  setMessageContext(state, data) {
    Vue.set(state, "messageContextMenu", data);
  },
  setEditMessage(state, data) {
    Vue.set(state, "editMessage", data);
  },
  setGenericMessage(state, message) {
    Vue.set(state, "genericMessage", message);
  },
  setServerSettings(state, { serverID, index }) {
    Vue.set(state, "serverSettings", { serverID, index });
  },
  setUserInformationPopout(state, id) {
    Vue.set(state, "userInformationPopoutID", id);
  },
  setPopoutVisibility(state, data) {
    Vue.set(state, data.name, data.visibility);
  },
  setFileToUpload(state, file) {
    Vue.set(state, "fileToUpload", file);
  },
  setImagePreviewURL(state, url) {
    Vue.set(state, "ImagePreviewURL", url);
  },
  setServerIDContextMenu(state, serverID) {
    Vue.set(state, "serverIDContextMenu", serverID);
  }
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
