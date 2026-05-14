/**
 * ChatStory — Episode [XX] Script
 * "[EPISODE TITLE]"
 *
 * ─────────────────────────────────────────
 * MESSAGE TYPES — quick reference
 * ─────────────────────────────────────────
 *
 * REGULAR MESSAGE:
 *   { t:'msg', f:'zoe', at:'7:14 PM', txt:'hello' }
 *   { t:'msg', f:'lena', at:'7:15 PM', gap:true, txt:'hi' }
 *   gap:true adds extra space above (use when sender changes or topic shifts)
 *
 * EMOJI ONLY:
 *   { t:'emoji', f:'zoe', at:'7:16 PM', txt:'🫠' }
 *
 * VOICE NOTE:
 *   { t:'voice', f:'lena', at:'7:22 PM', dur:'0:34',
 *     desc:'Lena — [how she sounds]: "[what she says]"' }
 *
 * PHOTO:
 *   { t:'photo', f:'lena', at:'11:03 AM',
 *     url:'filename.png',
 *     tag:'LENA · from camera roll',
 *     cap:'caption text' }
 *
 * SCREENSHOT (showing another conversation):
 *   { t:'ss', f:'zoe', at:'2:00 PM',
 *     from_label:'jake · private conversation',
 *     footer:'screenshot · 2:00 PM',
 *     msgs:[
 *       { who:'jake', color:'#b794f4', txt:'message text' },
 *       { who:'jake', color:'#b794f4', txt:'another message' },
 *     ]}
 *
 * DATE CHIP:
 *   { t:'date', x:'Sunday · 7:14 PM' }
 *
 * SILENCE:
 *   { t:'silence', x:'description — e.g. 4 minutes' }
 *
 * SYSTEM MESSAGE:
 *   { t:'sys', x:'Lena has left the chat' }
 *
 * CHOICE POINT (player picks what to say):
 *   { t:'choice',
 *     prompt: 'What do you say?',
 *     at: '11:09 AM',
 *     options: [
 *       {
 *         label: 'A',
 *         txt: 'your message option A',
 *         replies: [
 *           { f:'lena', at:'11:10 AM', txt:'lena replies to A' },
 *           { f:'zoe',  at:'11:11 AM', txt:'zoe also replies' },
 *         ]
 *       },
 *       {
 *         label: 'B',
 *         txt: 'your message option B',
 *         replies: [
 *           { f:'lena', at:'11:10 AM', txt:'lena replies to B' },
 *         ]
 *       },
 *     ]
 *   }
 *
 * ─────────────────────────────────────────
 */

const MESSAGES = [

  // ── SCENE 1 ─────────────────────────────────────────
  { t:'date', x:'Day · Time' },

  { t:'msg', f:'zoe', at:'0:00 PM', gap:true,
    txt:'first message' },

  // add more messages here...

];
