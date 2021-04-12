import { instance, wrapper } from "./Api";

const config = require("../config.js");

let domain = "";
if (config.serverURL) domain = config.serverURL + "/";

export default {
  post(data) {
    return wrapper(instance().post(domain + "/servers", data));
  },
  getChannels(serverID) {
    return wrapper(instance().get(domain + `/servers/${serverID}/channels`));
  },
  deleteInvite(inviteCode) {
    return wrapper(instance().delete(domain + `/servers/invite/${inviteCode}`));
  },
  postInvite(serverID) {
    return wrapper(instance().post(domain + `/servers/${serverID}/invite`));
  },
  createCustomInvite(serverID, customInvite) {
    return wrapper(
      instance().post(domain + `/servers/${serverID}/invites/custom`, {
        customCode: customInvite
      })
    );
  },
  getInvites(serverID) {
    return wrapper(instance().get(domain + `/servers/${serverID}/invites`));
  },
  getInviteDetail(inviteCode) {
    return wrapper(instance().get(domain + `/servers/invite/${inviteCode}`));
  },
  joinServer(inviteCode, optionalData) {
    return wrapper(
      instance().post(domain + `/servers/invite/${inviteCode}`, optionalData)
    );
  },
  joinServerById(server_id, optionalData) {
    return wrapper(
      instance().post(
        domain + `/servers/invite/servers/${server_id}`,
        optionalData
      )
    );
  },
  leaveServer(serverID) {
    return wrapper(instance().delete(domain + `/servers/${serverID}`));
  },
  deleteServer(serverID) {
    return wrapper(instance().post(domain + `/servers/${serverID}/delete`));
  },

  // Admin commands
  updateServer(serverID, data) {
    return wrapper(instance().patch(domain + `/servers/${serverID}`, data));
  },
  createChannel(serverID, name) {
    return wrapper(
      instance().put(domain + `/servers/${serverID}/channels`, { name })
    );
  },

  muteServer(serverID, type) {
    return wrapper(
      instance().put(domain + `/servers/${serverID}/mute`, { type })
    );
  },
  channelPosition(serverID, channelIDArr) {
    return wrapper(
      instance().put(domain + `/servers/${serverID}/channels/position`, {
        channel_position: channelIDArr
      })
    );
  },
  updateChannel(serverID, channelID, data) {
    return wrapper(
      instance().patch(
        domain + `/servers/${serverID}/channels/${channelID}`,
        data
      )
    );
  },
  muteChannel(serverID, channelID) {
    return wrapper(
      instance().put(domain + `/servers/${serverID}/channels/${channelID}/mute`)
    );
  },
  unmuteChannel(serverID, channelID) {
    return wrapper(
      instance().delete(
        domain + `/servers/${serverID}/channels/${channelID}/mute`
      )
    );
  },
  deleteChannel(serverID, channelID) {
    return wrapper(
      instance().delete(domain + `/servers/${serverID}/channels/${channelID}`)
    );
  },
  kickMember(serverID, id) {
    return wrapper(
      instance().delete(domain + `/servers/${serverID}/members/${id}`)
    );
  },
  banMember(serverID, id) {
    return wrapper(
      instance().put(domain + `/servers/${serverID}/bans/${id}`)
    );
  },
  unBanMember(serverID, id) {
    return wrapper(
      instance().delete(domain + `/servers/${serverID}/bans/${id}`)
    );
  },
  memberBans(serverID) {
    return wrapper(instance().get(domain + `/servers/${serverID}/bans`));
  },

  // roles
  createRole(serverID, data) {
    return wrapper(
      instance().post(domain + `/servers/${serverID}/roles`, data)
    );
  },
  // roles
  deleteRole(serverID, roleID) {
    return wrapper(
      instance().delete(domain + `/servers/${serverID}/roles/${roleID}`)
    );
  },
  // roles
  updateRole(serverID, roleID, data) {
    return wrapper(
      instance().patch(domain + `/servers/${serverID}/roles/${roleID}`, data)
    );
  },
  updateRolesPosition(serverID, data) {
    return wrapper(
      instance().patch(domain + `/servers/${serverID}/roles`, data)
    );
  },
  applyRoleToMember(serverID, roleID, memberID) {
    return wrapper(
      instance().patch(
        domain + `/servers/${serverID}/members/${memberID}/roles/${roleID}`
      )
    );
  },
  removeRoleFromMember(serverID, roleID, memberID) {
    return wrapper(
      instance().delete(
        domain + `/servers/${serverID}/members/${memberID}/roles/${roleID}`
      )
    );
  }
};
