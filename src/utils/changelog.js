const prototype = {
  version: 4,
  title: "",
  shortTitle: "",
  date: "1/06/2019",
  headColor: "rgba(155, 244, 66, 0.77)",
  new: ["", ""],
  next: [""]
};

const config = [
  {
    version: 8.2,
    title: "Better formatter + better performance.",
    shortTitle: "",
    date: "13/11/2019",
    headColor: "#0c7b7f",
    new: [
      "We have changed the markdown formatter from markdown-it to simple-markdown. This has also improved the performance. (Thanks bree!)"
    ],
  },
  {
    version: 8.1,
    title: "Move server channels",
    shortTitle: "",
    date: "12/11/2019",
    new: [
      "You can now move channels to make it more organized."
    ],
    fix: [
      "Fixed a bug where the notification sound would sometimes not work.",
      "Fixed a bug where join message would send twice."
    ],
  },
  {
    version: 8.0,
    title: "Move servers",
    shortTitle: "",
    date: "08/11/2019",
    new: [
      "You can now move servers to make your list more organized."
    ],
    fix: [
      "Fixed some bugs behind the scenes"
    ],
    msg: "Disabled custom emojis due to an xss vulnerability 🤦‍♂️"
  },
  {
    version: 7.9,
    title: "Server banner",
    shortTitle: "",
    date: "03/11/2019",
    new: [
      "You can now add banners to your server! These banners will be displayed in your server channels list and in the explore tab. To change your banner, go to your server settings page."
    ],
    fix: [
      "Fixed a bug where when pressing enter on the login or register key, it would not work properly."
    ],
    next: [
      "Re-design some popup menus starting from user settings. (Note that the survey kind of looks weird right now. It will be fixed in the next update hopefully :D"
    ]
  },
  {
    version: 7.8,
    title: "Redesigns!",
    shortTitle: "",
    date: "01/11/2019",
    new: [
      "Layout has been redesigned.",
      "Added an option to mute notification sounds.",
      "Last clicked channels should be remembered for each server.",
      "You can now delete Join, Left and Ban messages from the chat.",
      "Files not being uploaded? Try re-linking Google drive in the settings."
    ],
    next: ["Custom server banners."],
    msg:
      "Since this is a major re-design, there could be a lot of bugs. Please help me fix these bugs by sending me a message and I will give you a bug catcher badge in Nertivia. Thanks."
  },
  {
    version: 7.6,
    title: "👻Spooky bug fixes👻",
    shortTitle: "",
    date: "16/10/2019",
    new: ["Better handled Google Drive linking.", "👻👻👻"],
    fix: ["Spooked away a lot of bugs behind the scenes."],
    msg: "👻"
  },
  {
    version: 7.5,
    title: "GUI improvements",
    shortTitle: "",
    date: "09/10/2019",
    new: [
      "Design changes to some elements such as the tabs, Window controls and more."
    ],
    fix: [
      "Fixed a bug where presence status would not show properly in the header."
    ],
    msg:
      "I just want to say thanks to everyone who gave me feedback, it helps a lot! 😉 Native mobile app is coming soon!"
  },
  {
    version: 7.4,
    title: "Send message permission, Improved performance",
    shortTitle: "",
    date: "03/10/2019",
    new: [
      'Added send message permission. You can use this to allow other people to not write in your channel such as the "rules" channel.'
    ],
    fix: [
      "Fixed a lot of bugs in our cache system. This means that messages should send faster!"
    ]
  },
  {
    version: 7.3,
    title: "Kick and ban!",
    shortTitle: "",
    date: "29/09/2019",
    new: [
      "You can now kick/back members of a server by right clicking on their names in the server members list.",
      "Slightly changed message bubble design."
    ],
    fix: [
      "Fixed a bug where Join and Leave messages would not get notified when reloading client."
    ]
  },
  {
    version: 7.2,
    title: "Online, offline category in server member list",
    shortTitle: "",
    date: "21/09/2019",
    new: [
      "Online and offline is now a category in the server members list.",
      "Moved add server to the top of the servers list with new design.",
      "Added Explore button to the top of the servers list."
    ]
  },
  {
    version: 7.1,
    title: "Small improvements, bug fixes",
    shortTitle: "",
    date: "19/09/2019",
    new: [
      "When joining a server, the tabs should change to servers and default channel should open up.",
      "Swapped the changelog and the explore tab."
    ],
    fix: [
      "Fixed a bug where edit and delete buttons would show for all members.",
      'Fixed a bug where when clicking on "message" in the server tab, in someones profile, the tab wouldnt change to dm.'
    ]
  },
  {
    version: 7.0,
    title: "Nertivia now starts up when you get on your PC!",
    shortTitle: "",
    date: "13/09/2019",
    new: [
      "Nertivia app now starts up when you start your pc. You can change the behaviour in the settings."
    ]
  },
  {
    version: 6.9,
    title: "Explore filter, Blur experiment!",
    shortTitle: "",
    date: "06/09/2019",
    new: [
      "Added filter options to public servers list. Verified servers will be the default filter. Servers will be verified by me (Fishie). If your server does not get verified, Join the official nertivia server and message me.",
      "Added blur effect to user information popout for an experiment. (Only works in chrome and edge.) Blur effect may be added in more places in the future."
    ],
    fix: [
      "Fixed a bug where when someone leaves the server, the whole members list would disappear for that server.",
      "Fixed bugs with emoji sugestions panel."
    ]
  },
  {
    version: 6.8,
    title: "Bug fixes",
    shortTitle: "",
    date: "02/09/2019",
    fix: [
      "You can no longer turn on popup notifications on mobile as it causes issues."
    ],
    msg:
      "Notice: If you don't receive real time notifications inside the app, log out, and in again to fix it."
  },
  {
    version: 6.7,
    title: "New Explore tab!",
    shortTitle: "",
    date: "01/09/2019",
    new: [
      "You can now make your servers go public by posting them in the explore tab.",
      "Some pop ups have been improved for mobile users."
    ],
    fix: ["Some bugs have been fixed."]
  },
  {
    version: 6.6,
    title: "Performance improvements",
    shortTitle: "",
    date: "29/08/2019",
    new: ['Sneak peak of the new "Explore" tab :D (Unfinished)'],
    fix: ["Improved backend code. This should improve performance."]
  },
  {
    version: 6.5,
    title: "Bug fixes",
    shortTitle: "",
    date: "22/08/2019",
    fix: [
      "Fixed a bug where when being scrolled up, new messages would cause it to not load more.",
      "Fixed a bug where scroll to bottom button wouldnt work"
    ]
  },
  {
    version: 6.4,
    title: "Scrolling up should be smoother!",
    shortTitle: "",
    date: "19/08/2019",
    new: [
      "Scrolling up should be smoother now as messages below get unloaded."
    ],
    msg:
      "Known issue: When scrolled up and messages get unloaded below, new messages sent get appended at the bottom and messes up things D: going to fix asap."
  },
  {
    version: 6.3,
    title: "Performance Improvements!",
    shortTitle: "",
    date: "18/08/2019",
    msg:
      "I finally managed to find out why the chat is choppy when scrolling. The rotated emote is the cause. In this update, emotes only appear when hovering over the profile picture."
  },

  {
    version: 6.2,
    title: "Bug fixes",
    shortTitle: "",
    date: "17/08/2019",
    new: ["Added a copy button in the message context menu."],
    fix: [
      "Fixed bugs with textarea not resizing properly",
      "Fixed a bug where message context menu would be not visible.",
      "Other small bugs have been fixed."
    ]
  },
  {
    version: 6.1,
    title: "Download button, bug fixes",
    shortTitle: "",
    date: "16/08/2019",
    new: [
      "Added download button.",
      "Scroll up to load more messages.",
      "Scroll to bottom button has been added."
    ],
    fix: [
      "Fixed emoji size (2emx2em).",
      "Fixed a mistake in tag in profile panel.",
      "Fixed a bug where when logging out, the local storage data used to be present."
    ]
  },
  {
    version: 6.0,
    title: "Desktop app!",
    shortTitle: "",
    date: "11/08/2019",
    new: ["Desktop app is available to download!"],
    msg:
      "Download: https://github.com/supertiger1234/nertivia-desktop-app/releases"
  },

  {
    version: 5.9,
    title: "More Bug fixes!",
    shortTitle: "",
    date: "07/08/2019",
    fix: [
      "Fixed a bug where messages would appear blurry sometimes.",
      "Fixed a bug where scrolling would be inverted for some devices.",
      "Responsive images and embeds."
    ],
    msg:
      "Notice: If your message history loads mid way, this is because of our new message scrolling down system. This will be fixed after you send few messages."
  },
  {
    version: 5.8,
    title: "Bug fixes, Change password.",
    shortTitle: "",
    date: "05/08/2019",
    new: [
      "Added more badges (Bug Catcher, Idea Queen)",
      "You can now change your password."
    ],
    fix: [
      "Fixed a bug where desktop notifications would show for your own messages.",
      "Fixed a bug where editing custom emojis would break."
    ]
  },
  {
    version: 5.7,
    title: "Redesigned survey + user pop-out",
    shortTitle: "",
    date: "03/08/2019",
    new: [
      "Re-coded the survey. Note: since the survey is recoded, you will need to reselect some of the options.",
      "Remove '13 or under' option in the survey.",
      "Redesigned user information pop-out which now shows the badges for developer, creator and more."
    ],
    fix: [
      "Issues fixed where custom emojis with single character did not work."
    ]
  },
  {
    version: 5.6,
    title: "Bug fixes and redesigns",
    shortTitle: "",
    date: "30/07/2019",
    new: [
      "You can now enable desktop notifications by going in the settings.",
      "We have re-added syntax highlighting and also improved the performance of message formatting. (Thanks to Bree!)",
      "Profile Setting has been re-designed. You can now edit your username, email and password!"
    ],
    fix: ["Fixed some bugs with edit message"]
  },
  {
    version: 5.5,
    title: "Oopsies!",
    shortTitle: "",
    date: "25/07/2019",
    fix: [
      "Removed codeblock highlighter due to some problems. Will be back in the future."
    ]
  },

  {
    version: 5.4,
    title: "Bug Fixes!",
    shortTitle: "",
    date: "24/07/2019",
    fix: [
      "Fixed a bug where when pressing the up arrow key to edit while there is text in the text box, it would discard the message and edit.",
      "Fixed a bug where when editing a message and going to a different tab, the message is still editing.",
      "Fixed a bug where if an emoji is in the recents, and then removed in the settings, the emoji would stay in the recents.",
      "Fixed bugs with html escape :scream:"
    ]
  },

  {
    version: 5.3,
    title: "Edit messages, More performance!",
    shortTitle: "",
    date: "23/07/2019",
    new: [
      "You can now edit your own messages!",
      "Avatar and message pictures should now be disk cached.",
      "Gif avatars will now only animate when being hovered. This will improve performance.",
      "You can now click on embed images to get a full screen preview.",
      "Server channels now show a gray background when selected."
    ],
    fix: [
      "Fixed a bug where when deleting a server channel, the notification would still stay.",
      "Fixed a bug where when sending a message, the friend wouldnt go at the top in the recents list."
    ],
    next: ["HTML channel for servers", "Change username, email and password."]
  },

  {
    version: 5.2,
    title: "Delete messages, URL Embeds",
    shortTitle: "",
    date: "19/07/2019",
    new: [
      "You can now delete your own messages.",
      "URLs now show open graph embeds."
    ],
    next: ["Edit messages."]
  },

  {
    version: 5.1,
    title: "Change server avatar!",
    shortTitle: "Change server avatar!",
    date: "17/07/2019",
    new: [
      "You can now change your server avatar from the server settings menu!"
    ],
    fix: ["Some bugs have been fixed."],
    next: ["Not decided yet."]
  },

  {
    version: 5.0,
    title: "Change server name and default server channel",
    shortTitle: "Change server name and default server channel",
    date: "15/07/2019",
    new: [
      "You can now change the name of your server.",
      "You can now change the default channel to something else."
    ],
    fix: ["Some bugs have been fixed."],
    next: ["Change servers avatar."]
  },

  {
    version: 4.9,
    title: "Color codeblocks and create multiple channels!",
    shortTitle: "Color codeblocks and create multiple channels!",
    date: "12/07/2019",
    new: [
      "You can now color your code (thanks bree!) by typing: <div style='background: #00000066; border-radius: 5px; padding: 5px;'>```js<br>    console.log('Hello World!');<br>```</div>",
      "A new server settings option has been added that allows you to delete your server, create new channels and rename your channels. More features will be added in the future! ",
      "The 'Recents' tab should now flash red when you get a notification.",
      "Friends and Recents tabs position will be saved when visiting the site."
    ],
    fix: [
      "Fixed a bug where, when you are on the changelog or the server browser tab, the notifications get dismissed."
    ],
    next: ["more server settings"]
  },
  {
    version: 4.8,
    title: "Server Members Status and new Logo!",
    shortTitle: "Server Members Status and new Logo!",
    date: "08/07/2019",
    new: [
      "Nertivia has a new cat logo! (Thanks to Fullipsp for the design!)",
      "You can now see online status of server members!",
      "You can now click on links that start with 'http'"
    ],
    fix: [
      "Fixed a bug where when creating a server, a reload is required to show yourself in the server members list."
    ],
    next: ["Create multiple channels in a server."],
    msg: `You might be wondering, where did the official Nertivia server go? Well, I accidentally deleted it :/ sorry. Here's the new one though! <a style="color: #00b6ff;" href="http://nertivia.supertiger.tk/invites/Db3p5n">http://nertivia.supertiger.tk/invites/Db3p5n</a>`
  },
  {
    version: 4.7,
    title: "Bug fixes",
    shortTitle: "Bug fixes",
    date: "24/06/2019",
    new: ["Emoji character limit expanded to 30 characters!"],
    fix: [
      "Fixed a bug with the notification where it wouldn't dismiss on changing tabs.",
      "Fixed a bug where unopened dms wouldn't show notifications on the tabs.",
      "Fixed emoji character limit bypass.",
      "Emojis can now be inserted in firefox!"
    ],
    next: ["Online status for server members list."]
  },
  {
    version: 4.6,
    title: "Server Members list and bug fixes",
    shortTitle: "Server Members list and bug fixes",
    date: "21/06/2019",
    new: [
      "Server members are now shown!",
      "Adjusted some padding with the tabs."
    ],
    fix: [
      "Fixed a vulnerability where after leaving a server, you could still send messages."
    ],
    next: ["Online status for server members list."]
  },
  {
    version: 4.5,
    title: "Server bug fixes",
    shortTitle: "Server bug fixes",
    date: "03/06/2019",
    new: ["Notifications for servers has been added."],
    fix: [
      "Fixed notification bug where server notification are shown in dms.",
      "When switching from server to direct message tab (and vice versa), the channels should now be separated.",
      "You can now only create 30 invites per server."
    ]
  },
  {
    version: 4,
    title: "Make your own servers! (Alpha)",
    shortTitle: "Servers (Alpha)",
    date: "23/05/2019",
    new: [
      "You can now make servers! Note that this is in alpha stage which means that it's not complete and there could be a ton of bugs everywhere :c get reporting!",
      "Adjusted padding in some areas."
    ],
    next: ["Members list for servers"],
    msg: `
<div style='color: red;'>
  Please note that this update could be unstable and could involve of resetting the database.
</div>Join the official Nertivia server by clicking

<a style="
color: #27a3ff;
" href='https://nertivia.supertiger.tk/invites/8SSrCF'>here</a>`
  },
  {
    version: 3,
    title: "Page Re-designs",
    shortTitle: "Page Re-designs",
    date: "28/04/2019",
    new: [
      "Home page has been re-designed and has some cool animations.",
      "New login and register pages.",
      "Padding and margin adjusted and small design changes throughout the app.",
      "Added Oceania to the survey list."
    ],
    fix: ["Fixed bugs with appearance settings not correctly working."],
    next: ["Servers (If nothing else distracts me -_-)"]
  },
  {
    version: 1.5,
    title: "New Notification Sound",
    shortTitle: "Notification Sound",
    date: "22/04/2019",
    new: [
      "Do not disturb should now mute notification sounds.",
      "New notification sound has been added."
    ],
    fix: [
      "Clicking 'Send Message' should close the user panel.",
      "Online status and notifications were not showing correctly."
    ]
  },
  {
    version: 1,
    title: "Profile Panel",
    shortTitle: "Profile Panel",
    date: "21/04/2019",
    new: [
      "Tabs have been added at the top of the screen.",
      "Added an option to display your messages on the right and other messages to the left.",
      "Added users information page which allows you to block (Block not implemented yet), End friendship, message someone and view their information.",
      "Replaced 'Sending' and 'Sent' with icons.",
      "Added a survey option to display your hobbies and age in your profile page."
    ],
    fix: ["Some formatting issues with custom emojis have been fixed."],
    next: ["Make your own servers"]
  },
  {
    title: "Custom emojis!",
    shortTitle: "Custom emojis!",
    date: "29/03/2019",
    new: [
      "You can now add your own emojis for free.",
      "User status in the top bar to easily view if someone is still online or, if you're talking to a wall on the phone.",
      "Switching dms should be faster now."
    ],
    next: ["Servers", "View an users information page"]
  },
  {
    title: "Emoji tabs and recent emojis",
    shortTitle: "Emoji tabs and recent emojis",
    date: "22/03/2019",
    new: ["Tabs in emoji panel", "Recent Emojis now show in the emoji panel"],
    fix: ["Emoji panel closes when clicking outside the panel."],
    next: ["Custom emojis"]
  },
  {
    title: "Emojis :D",
    shortTitle: "Emojis",
    date: "20/03/2019",
    new: [
      "Emoji suggestions in chat when typing in any emoji :ok_hand:",
      "Emoji picker",
      "Removed planned features from changelog"
    ],
    next: [
      "make tabs in emoji panel",
      "Make it so that emoji panel closes when clicking outside the panel.",
      "Custom emojis for freeeee!"
    ]
  },
  {
    title: "Upload anything!",
    shortTitle: "Upload anything!",
    date: "08/03/2019",
    new: [
      "You can now upload any kind of files to friends. (Google drive required)",
      "Shift + enter should expand the text area.",
      "Made some design changes to the home page panel."
    ],
    fix: [
      "Improved performance by using Redis in more places.",
      "Small bugs fixed around some places."
    ],
    next: ["Servers or emojis."]
  },
  {
    title: "Notifications are finally here!",
    shortTitle: "Notifications",
    date: "18/02/2019",
    new: [
      "When you get a notification, you will now be notified by the red flashing Indicator.",
      "When you get a new friend request, you will notified by a sound.",
      "Added a new Recents tab to easily see who messaged you last.",
      "Adjusted the padding and size in some places such as the friends list.",
      "Messages can now be formated (e.g. **Hello**)"
    ],
    fix: [
      "Performance improvements were made in some places.",
      'Yesterday is now spelt with a capital "Y" in the timestamp.'
    ],
    next: ["Uploading images or any files."]
  },
  {
    title: "Typing Indicator",
    shortTitle: "Typing Indicator",
    date: "08/02/2019",
    new: [
      "See who's typing with the new typing indicator!",
      "Online and offline friends now have their own category.",
      "Timestamps for each message."
    ],
    fix: [
      "Some bugs with the message list scrolling.",
      "Added some margin and padding to some places."
    ],
    next: ["Message notifications."]
  },
  {
    title: "Avatar",
    shortTitle: "Avatar",
    date: "29/01/2019",
    new: [
      "Settings page has been added.",
      "You can now set your own profile picture from the settings page.",
      "You can now logout within the app."
    ],
    next: ["Typing status."]
  },
  {
    title: "Message limit, Chat message changes",
    shortTitle: "Message limit",
    date: "25/01/2019",
    new: ["Changed the design of messages slightly and changed the font size."],
    fix: ["Messages now have a limit of 5000 characters."],
    next: ["I have decided to add profile pictures in the next update."]
  },

  {
    title: "ReeeeCaptcha :D",
    shortTitle: "ReCaptcha",
    date: "23/01/2019",
    new: [
      "Added reCaptcha to our login and register so our website is safe from any spam accounts that could be created by bots."
    ],
    next: ["Typing status or maybe profile pictures (haven't decided yet)"]
  },
  {
    title: "Online status and fixes",
    shortTitle: "Online status and fixes",
    date: "22/01/2019",
    new: [
      "See if your friends are online, away, busy, looking to play or offline.",
      "Planned features and the latest change now shows in app."
    ],
    fix: [
      "Messages will no longer show twice when sending.",
      "Adjusted padding on some places.",
      "Message font is now much smaller."
    ]
  },
  {
    title: "Send and receive messages (experimental)",
    shortTitle: "Send and receive messages",
    date: "14/01/2019",
    new: ["You can now send messages to your friends!"],
    next: [
      "improving the new messaging functionality and adding typing indicators, online statuses."
    ]
  },

  {
    title: "Public change log, Accept friends",
    shortTitle: "Public change log, Accept friends",
    date: "09/01/2019",
    new: [
      "Added a change log so you can see how much progress is being made to Nertivia.",
      "Adding friends, denying requests, accepting requests is now possible."
    ],
    next: ["Ability to send messages."]
  },

  {
    title: "Issues fixed",
    shortTitle: "Issues fixed",
    date: "04/01/2019",
    msg: "Tweaks have been made to the website here and there."
  },

  {
    title: "Compatibility",
    date: "31/12/2018",
    msg:
      "Website is now compatible for viewing on mobile, tablet and desktop devices."
  }
];

export default config;
