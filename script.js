/*
README - How to Customize This Guide
1. Add a new category:
   - In TROUBLESHOOTING_TREE.categories, add a new object with id, title, icon, description, and issues.
2. Add a new issue:
   - Inside a category's issues array, add a new object with id, title, icon, and steps.
3. Edit troubleshooting steps:
   - Update the steps array for any issue. Each step needs a type and text.
   - type can be "quick" (green), "next" (yellow), or "escalate" (red).
4. Change the tech ticket link:
   - Update TROUBLESHOOTING_TREE.techTicketUrl below.
5. Add a help video to an issue:
   - Add a video property to any issue with a YouTube link or direct video URL.
   - Example: video: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
   - The video will appear automatically at the top of that issue's troubleshooting steps.
*/

const TROUBLESHOOTING_TREE = {
  techTicketUrl: "https://conroeisd.incidentiq.com/",
  categories: [
    {
      id: "laptop",
      title: "Laptop",
      icon: "💻",
      description: "Power, speed, and connection issues",
      issues: [
        {
          id: "laptop-power",
          title: "Laptop won't turn on",
          icon: "🔌",
          steps: [
            { type: "quick", text: "Hold the power button for 10 seconds, then press it once to restart." },
            { type: "quick", text: "Plug in the charger and confirm the charging light appears." },
            { type: "next", text: "Try a different outlet and check if the power cable is firmly connected. Tip: avoid the grey outlets in the room — they shut off automatically after a period of inactivity and may not be supplying power." },
            { type: "escalate", text: "If there is still no power after 5 minutes of charging, submit a tech ticket." }
          ]
        },
        {
          id: "laptop-internet",
          title: "Laptop internet not working",
          icon: "📶",
          steps: [
            { type: "quick", text: "Confirm Wi-Fi is turned on and Airplane Mode is off." },
            { type: "quick", text: "Disconnect from Wi-Fi and reconnect to the school network." },
            { type: "next", text: "Restart the laptop to refresh the network connection." },
            { type: "escalate", text: "If only your laptop is offline while others are connected, submit a tech ticket." }
          ]
        },
        {
          id: "laptop-frozen",
          title: "Laptop frozen",
          icon: "🧊",
          steps: [
            { type: "quick", text: "Wait 30 seconds to see if the laptop responds." },
            { type: "next", text: "Press Ctrl + Shift + Esc and close the unresponsive app if Task Manager opens." },
            { type: "next", text: "Hold the power button to force restart if the keyboard and mouse do not respond." },
            { type: "escalate", text: "If freezing continues during the day, submit a tech ticket with the app name." }
          ]
        }
      ]
    },
    {
      id: "chromebook",
      title: "Chromebook",
      icon: "🖥️",
      description: "Login and network support",
      issues: [
        {
          id: "chromebook-login",
          title: "Chromebook login issue",
          icon: "🔐",
          steps: [
            { type: "quick", text: "Check for typos in the email username and password." },
            { type: "quick", text: "Make sure Caps Lock is off before trying again." },
            { type: "next", text: "Restart the Chromebook and retry login using school credentials." },
            { type: "next", text: "If the student forgot their password, the teacher can reset it in Teacher SSO using the backpack icon." },
            { type: "escalate", text: "If login still fails, submit a tech ticket for account verification." }
          ]
        },
        {
          id: "chromebook-wifi",
          title: "Chromebook won't connect to Wi-Fi",
          icon: "📡",
          steps: [
            { type: "quick", text: "Open Wi-Fi settings and select the correct school network." },
            { type: "quick", text: "Turn Wi-Fi off and back on." },
            { type: "next", text: "Restart the Chromebook and reconnect." },
            { type: "escalate", text: "If connection fails in multiple rooms, submit a tech ticket." }
          ]
        }
      ]
    },
    {
      id: "ipad",
      title: "iPad",
      icon: "📱",
      description: "Charging and app troubleshooting",
      issues: [
        {
          id: "ipad-charging",
          title: "iPad not charging",
          icon: "🔋",
          steps: [
            { type: "quick", text: "Use a known working charging cable and wall adapter." },
            { type: "quick", text: "Check and gently clear debris from the charging port." },
            { type: "next", text: "Leave plugged in for 10 minutes before turning on." },
            { type: "escalate", text: "If no charging icon appears, submit a tech ticket." }
          ]
        },
        {
          id: "ipad-app",
          title: "iPad app not opening",
          icon: "📚",
          steps: [
            { type: "quick", text: "Close the app and open it again." },
            { type: "quick", text: "Check that iPad is connected to Wi-Fi." },
            { type: "next", text: "Restart the iPad and relaunch the app." },
            { type: "escalate", text: "If app still crashes, submit a tech ticket with app name and grade level." }
          ]
        }
      ]
    },
    {
      id: "projector",
      title: "Projector",
      icon: "📽️",
      description: "Display and touch troubleshooting",
      issues: [
        {
          id: "projector-signal",
          title: "Projector says no signal",
          icon: "⚠️",
          steps: [
            { type: "quick", text: "Confirm projector and laptop are both powered on." },
            { type: "quick", text: "Check HDMI/adapter connection on both ends." },
            { type: "next", text: "Press and hold the Windows key, then press P. A panel will appear on the right side of the screen. Click 'Duplicate' to show the same image on both the laptop and projector." },
            { type: "escalate", text: "If signal still missing, submit a tech ticket and note room number." }
          ]
        },
        {
          id: "projector-touch",
          title: "Interactive projector touch not working",
          icon: "👆",
          steps: [
            { type: "quick", text: "Confirm the projector is powered on and displaying content." },
            { type: "quick", text: "Check that the USB cable connecting the projector to the laptop is firmly plugged in on both ends." },
            { type: "next", text: "Press the User button on the projector remote to run auto calibration for touch." },
            { type: "next", text: "Restart the laptop to refresh the touch driver connection." },
            { type: "escalate", text: "If touch still does not respond, submit a tech ticket and note which classroom." }
          ]
        },
        {
          id: "projector-calibrate",
          title: "Recalibrate projector touch",
          icon: "🎯",
          steps: [
            { type: "quick", text: "Press the Menu button on the projector, select the 'Pen/Touch' menu, and press Enter." },
            { type: "quick", text: "Select 'Auto Calibration' and press Enter. A message will appear asking 'Do you want to continue?'" },
            { type: "next", text: "Make sure the patterned image on the screen fits within the frame of the projected display, then press Enter or click 'Yes'." },
            { type: "next", text: "Adjust the image focus if necessary while the calibration pattern is visible." },
            { type: "next", text: "The system will auto-calibrate. A pattern will appear and then disappear. If calibration succeeds, the cursor location and pen position should match. If you see a message that calibration failed, try the steps again or contact support." }
          ]
        },
        {
          id: "projector-touch-offset",
          title: "Projector touch tapping in wrong location",
          icon: "❌➡️✅",
          steps: [
            { type: "quick", text: "This happens when touches are offset—when you tap one spot but it registers somewhere else. Use Touch Unit Calibration to fix this." },
            { type: "quick", text: "Press the Menu button on the projector, select the 'Calibration' menu, and press Enter." },
            { type: "next", text: "Select 'Touch Unit Calibration' and press Enter. Then select 'Touch Calibration' and press Enter again." },
            { type: "next", text: "A message appears asking 'Do you want to continue?' Select 'Yes'." },
            { type: "next", text: "Green circles will appear on the screen one at a time. Touch and hold the center of each circle with your finger until it disappears. Continue touching each circle as it appears until all circles are gone." },
            { type: "next", text: "Important: Use the tip of your finger and touch the corner of each circle for accuracy. If you make a mistake, press Esc to go back one step, or press Esc twice to cancel the entire calibration." },
            { type: "escalate", text: "If touch is still offset after calibration, submit a tech ticket." }
          ]
        },
        {
          id: "projector-touch-laptop",
          title: "Touch registers on laptop instead of projector",
          icon: "💻➡️📊",
          steps: [
            { type: "quick", text: "This means Windows does not recognize the projector as the touch input device. You need to set up the Tablet PC Settings on your laptop." },
            { type: "next", text: "Open Windows Search and type 'control panel', then open Control Panel." },
            { type: "next", text: "In Control Panel, find and click 'Tablet PC Settings'." },
            { type: "next", text: "In the window that appears, click the 'Set Up' button." },
            { type: "next", text: "You will be asked whether to set up for pen or finger input. Choose the one you are using to interact with the projector." },
            { type: "next", text: "A white screen will appear and you will see an instruction to 'Press Enter'. Keep pressing Enter until the setup screen moves to your projector display." },
            { type: "next", text: "Once you see the setup screen on the projector, tap the projector screen. The system will calibrate and recognize the projector as your touch input device." },
            { type: "escalate", text: "If touches still register on the laptop after setup, submit a tech ticket for further assistance." }
          ]
        }
      ]
    },
    {
      id: "internet",
      title: "Internet/Wi-Fi",
      icon: "🌐",
      description: "School network connection help",
      issues: [
        {
          id: "internet-general",
          title: "Internet/Wi-Fi not working",
          icon: "📶",
          steps: [
            { type: "quick", text: "Check if nearby devices are also offline." },
            { type: "quick", text: "Turn Wi-Fi off and back on." },
            { type: "next", text: "Restart your device and reconnect to school Wi-Fi." },
            { type: "escalate", text: "If outage continues for your room, submit a tech ticket." }
          ]
        }
      ]
    },
    {
      id: "sound",
      title: "Sound",
      icon: "🔊",
      description: "Audio playback and volume checks",
      issues: [
        {
          id: "sound-not-working",
          title: "Sound not working",
          icon: "🎧",
          steps: [
            { type: "quick", text: "Increase device and app volume; unmute both." },
            { type: "quick", text: "To use the room speaker system: click the speaker icon in the bottom-right corner of the taskbar, then click the arrow (^) next to the volume slider. A list of audio devices will appear — click 'Headphones 3- Realtek(R) Audio' to switch to the room speakers." },
            { type: "quick", text: "Check if headphones or Bluetooth speakers are connected." },
            { type: "next", text: "Restart the app or browser tab playing audio." },
            { type: "escalate", text: "If no audio from any app, submit a tech ticket." }
          ]
        }
      ]
    },
    {
      id: "login",
      title: "Login/Password",
      icon: "🔑",
      description: "Credential and account access",
      issues: [
        {
          id: "login-password-help",
          title: "Login/password help",
          icon: "🛡️",
          steps: [
            { type: "quick", text: "Double-check username format and password entry." },
            { type: "quick", text: "Try signing in from another browser tab or window." },
            { type: "next", text: "Use your district password reset process if available." },
            { type: "escalate", text: "If account remains locked, submit a tech ticket for reset assistance." }
          ]
        }
      ]
    },
    {
      id: "docking-station",
      title: "Docking Station",
      icon: "🔌",
      description: "Monitors, peripherals, and power",
      issues: [
        {
          id: "docking-no-display",
          title: "Monitor not showing when docked",
          icon: "🖥️",
          steps: [
            { type: "quick", text: "Make sure the docking station is plugged into power and the power light is on." },
            { type: "quick", text: "If the power light is off, unplug the power cable from the docking station, wait 5 seconds, and firmly plug it back in. Tip: if there is still no power, check that it is not plugged into a grey outlet — those shut off automatically after inactivity. Move the cable to a standard white outlet if so." },
            { type: "quick", text: "Unplug the USB-C/Thunderbolt cable from the laptop and plug it back in firmly." },
            { type: "next", text: "Press and hold the Windows key, then press P. A panel will appear on the right side of the screen. Click 'Duplicate' to mirror your screen to the monitor, or 'Extend' to use it as a second screen." },
            { type: "next", text: "If the monitor still does not appear, right-click the desktop and select 'Display settings'. Scroll down to see all detected displays. If a display shows as 'Disabled', click on it, scroll down to the 'Multiple displays' section, uncheck 'Disconnect this display', then click 'Apply'." },
            { type: "escalate", text: "If the monitor still has no signal, submit a tech ticket with room number and docking station model." }
          ]
        },
        {
          id: "docking-not-charging",
          title: "Laptop not charging through dock",
          icon: "🔋",
          steps: [
            { type: "quick", text: "Confirm the docking station power cable is fully seated in the dock and the outlet. Tip: if the outlet has no power, check whether it is a grey outlet — these shut off after inactivity. Try a standard white outlet instead." },
            { type: "quick", text: "Reseat the USB-C/Thunderbolt cable between the dock and laptop." },
            { type: "next", text: "Test with a direct charger to confirm the laptop itself charges normally." },
            { type: "escalate", text: "If the dock does not charge the laptop with a working outlet, submit a tech ticket." }
          ]
        },
        {
          id: "docking-peripherals",
          title: "Keyboard/mouse not working through dock",
          icon: "⌨️",
          steps: [
            { type: "quick", text: "Unplug and replug the keyboard and mouse into the docking station." },
            { type: "quick", text: "Try a different USB port on the dock." },
            { type: "next", text: "Disconnect the dock from the laptop, wait 10 seconds, and reconnect." },
            { type: "escalate", text: "If peripherals still do not respond, submit a tech ticket." }
          ]
        }
      ]
    },
    {
      id: "printer",
      title: "Printer",
      icon: "🖨️",
      description: "Connection and printing troubleshooting",
      issues: [
        {
          id: "printer-offline",
          title: "Printer is offline",
          icon: "📴",
          steps: [
            { type: "quick", text: "Make sure the printer is powered on and no warning lights are showing." },
            { type: "quick", text: "Check that the network cable is connected or the printer is connected to school Wi-Fi." },
            { type: "next", text: "On your laptop, open Settings > Bluetooth & devices > Printers & scanners, select the printer, and make sure 'Use printer offline' is not enabled." },
            { type: "next", text: "Restart the printer, then restart your laptop and try a test print." },
            { type: "escalate", text: "If the printer still shows offline, submit a tech ticket with the printer name and room number." }
          ]
        },
        {
          id: "printer-queue-stuck",
          title: "Print jobs stuck in queue",
          icon: "🧾",
          steps: [
            { type: "quick", text: "Open the printer queue and cancel all stuck print jobs." },
            { type: "quick", text: "Turn the printer off for 10 seconds, then turn it back on." },
            { type: "next", text: "Send a one-page test print to confirm the queue is cleared." },
            { type: "next", text: "If jobs keep getting stuck, restart your laptop to reset the print service." },
            { type: "escalate", text: "If the queue still freezes, submit a tech ticket with the time and document name." }
          ]
        },
        {
          id: "printer-wrong-selected",
          title: "Wrong printer selected",
          icon: "🎯",
          steps: [
            { type: "quick", text: "Before printing, open the printer dropdown and confirm the classroom printer is selected." },
            { type: "quick", text: "In Printers & scanners, set the classroom printer as default." },
            { type: "next", text: "Print a one-page test document to verify it goes to the correct printer." },
            { type: "escalate", text: "If jobs still route to the wrong printer, submit a tech ticket with both printer names." }
          ]
        },
        {
          id: "printer-no-output",
          title: "Nothing prints with no error",
          icon: "📄",
          steps: [
            { type: "quick", text: "Make sure paper is loaded and trays or doors are fully closed." },
            { type: "quick", text: "Check toner or ink status on the printer panel." },
            { type: "next", text: "Print a self-test page from the printer menu. If that works, remove and re-add the printer on your laptop." },
            { type: "escalate", text: "If there is still no output, submit a tech ticket and include what app you printed from." }
          ]
        },
        {
          id: "printer-quality",
          title: "Print quality is poor",
          icon: "🖨️",
          steps: [
            { type: "quick", text: "Check toner or ink levels and replace low cartridges if needed." },
            { type: "quick", text: "Run the printer cleaning or maintenance cycle from the printer menu." },
            { type: "next", text: "Use fresh paper and make sure print quality is not set to Draft mode." },
            { type: "escalate", text: "If print quality is still streaky or faded, submit a tech ticket for printer maintenance." }
          ]
        }
      ]
    },
    {
      id: "other",
      title: "Other",
      icon: "🧰",
      description: "Need help with something else",
      issues: [
        {
          id: "other-support",
          title: "Other / need tech support",
          icon: "🆘",
          steps: [
            { type: "quick", text: "Try restarting the device and reopening the tool you are using." },
            { type: "next", text: "Write down the exact error message and when it appears." },
            { type: "next", text: "Note device type, room number, and class period." },
            { type: "escalate", text: "Submit a tech ticket with those details for faster support." }
          ]
        }
      ]
    }
  ]
};

const app = document.getElementById("app");
const progressLabel = document.getElementById("progressLabel");

const state = {
  currentView: "categories",
  selectedCategoryId: null,
  selectedIssueId: null,
  // Stores previous view snapshots so Back behaves predictably.
  history: []
};

function pushHistory() {
  state.history.push({
    currentView: state.currentView,
    selectedCategoryId: state.selectedCategoryId,
    selectedIssueId: state.selectedIssueId
  });
}

function goBack() {
  if (state.history.length === 0) {
    render();
    return;
  }

  const previous = state.history.pop();
  state.currentView = previous.currentView;
  state.selectedCategoryId = previous.selectedCategoryId;
  state.selectedIssueId = previous.selectedIssueId;
  render();
}

function startOver() {
  state.currentView = "categories";
  state.selectedCategoryId = null;
  state.selectedIssueId = null;
  state.history = [];
  render();
}

function openCategory(categoryId) {
  pushHistory();
  state.currentView = "issues";
  state.selectedCategoryId = categoryId;
  state.selectedIssueId = null;
  render();
}

function openIssue(issueId) {
  pushHistory();
  state.currentView = "troubleshooting";
  state.selectedIssueId = issueId;
  render();
}

function getSelectedCategory() {
  return TROUBLESHOOTING_TREE.categories.find((category) => category.id === state.selectedCategoryId) || null;
}

function getSelectedIssue() {
  const category = getSelectedCategory();
  if (!category) return null;
  return category.issues.find((issue) => issue.id === state.selectedIssueId) || null;
}

function getStepClass(type) {
  if (type === "quick") return "step-quick";
  if (type === "next") return "step-next";
  return "step-escalate";
}

function updateProgressLabel() {
  if (state.currentView === "categories") {
    progressLabel.textContent = "Step 1: Choose a category";
  } else if (state.currentView === "issues") {
    progressLabel.textContent = "Step 2: Choose an issue";
  } else {
    progressLabel.textContent = "Step 3: Try these fixes";
  }
}

function createCardButton(title, subtitle, icon, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card";
  button.innerHTML = `
    <p class="card-title"><span class="emoji">${icon}</span> ${title}</p>
    <p class="card-subtitle">${subtitle}</p>
  `;
  button.addEventListener("click", onClick);
  return button;
}

function renderCategories() {
  const title = document.createElement("h2");
  title.className = "screen-title";
  title.textContent = "Choose your device or issue type";

  const grid = document.createElement("section");
  grid.className = "card-grid";

  TROUBLESHOOTING_TREE.categories.forEach((category) => {
    const card = createCardButton(category.title, category.description, category.icon, () => openCategory(category.id));
    grid.appendChild(card);
  });

  app.replaceChildren(title, grid);
}

function renderIssues() {
  const category = getSelectedCategory();

  if (!category) {
    renderFallback("Category not found", "This branch is missing. Please go back or start over.");
    return;
  }

  const title = document.createElement("h2");
  title.className = "screen-title";
  title.textContent = `${category.icon} ${category.title}: Choose a specific issue`;

  const grid = document.createElement("section");
  grid.className = "card-grid";

  if (!category.issues || category.issues.length === 0) {
    renderFallback("No issues listed", "This category does not have issue cards yet. You can add them in script.js.");
    return;
  }

  category.issues.forEach((issue) => {
    const card = createCardButton(issue.title, "Open troubleshooting steps", issue.icon || "🛠️", () => openIssue(issue.id));
    grid.appendChild(card);
  });

  const controls = createControls();
  app.replaceChildren(title, grid, controls);
}

function getVideoEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    // Handle https://www.youtube.com/watch?v=ID
    if ((parsed.hostname === "www.youtube.com" || parsed.hostname === "youtube.com") && parsed.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }
    // Handle https://youtu.be/ID
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }
    // Return as-is for direct video files
    return url;
  } catch {
    return null;
  }
}

function renderTroubleshooting() {
  const issue = getSelectedIssue();

  if (!issue) {
    renderFallback("Issue not found", "This troubleshooting path is missing. Please go back or start over.");
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "troubleshooting-wrap";

  const heading = document.createElement("h2");
  heading.className = "issue-heading";
  heading.textContent = `${issue.icon || "🛠️"} ${issue.title}`;

  const intro = document.createElement("p");
  intro.className = "issue-intro";
  intro.textContent = "Try these steps in order. Most issues are fixed in the first two checks.";

  const stepList = document.createElement("div");
  stepList.className = "step-list";

  if (!issue.steps || issue.steps.length === 0) {
    renderFallback("No steps available", "This issue needs troubleshooting steps added in script.js.");
    return;
  }

  issue.steps.forEach((step, index) => {
    const stepCard = document.createElement("article");
    stepCard.className = `step-card ${getStepClass(step.type)}`;
    stepCard.innerHTML = `
      <h3>Step ${index + 1}</h3>
      <p>${step.text}</p>
    `;
    stepList.appendChild(stepCard);
  });

  const controls = createControls();

  const helpBox = document.createElement("section");
  helpBox.className = "help-box";
  helpBox.innerHTML = `
    <h3>Still Need Help?</h3>
    <p>If the issue is not solved, send a ticket so the tech team can follow up.</p>
    <a class="ticket-link" href="${TROUBLESHOOTING_TREE.techTicketUrl}" target="_blank" rel="noopener noreferrer">📝 Submit a Tech Ticket</a>
  `;

  const elements = [heading, intro];

  if (issue.video) {
    const embedUrl = getVideoEmbedUrl(issue.video);
    if (embedUrl) {
      const videoBlock = document.createElement("div");
      videoBlock.className = "video-block";
      const isYoutube = embedUrl.includes("youtube.com/embed");
      if (isYoutube) {
        videoBlock.innerHTML = `
          <p class="video-label">📹 Video Guide</p>
          <div class="video-wrapper">
            <iframe src="${embedUrl}" title="Video guide" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        `;
      } else {
        videoBlock.innerHTML = `
          <p class="video-label">📹 Video Guide</p>
          <video class="video-direct" controls>
            <source src="${embedUrl}">
            Your browser does not support video playback.
          </video>
        `;
      }
      elements.push(videoBlock);
    }
  }

  elements.push(stepList, controls, helpBox);
  wrapper.append(...elements);
  app.replaceChildren(wrapper);
}

function createControls() {
  const controls = document.createElement("div");
  controls.className = "controls";

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "btn btn-secondary";
  backButton.textContent = "⬅️ Back";
  backButton.addEventListener("click", goBack);

  const startOverButton = document.createElement("button");
  startOverButton.type = "button";
  startOverButton.className = "btn btn-primary";
  startOverButton.textContent = "🏠 Start Over";
  startOverButton.addEventListener("click", startOver);

  controls.append(backButton, startOverButton);
  return controls;
}

function renderFallback(titleText, messageText) {
  const fallback = document.createElement("section");
  fallback.className = "empty-state";
  fallback.innerHTML = `
    <h2>${titleText}</h2>
    <p>${messageText}</p>
  `;

  const controls = createControls();
  app.replaceChildren(fallback, controls);
}

function render() {
  updateProgressLabel();

  if (state.currentView === "categories") {
    renderCategories();
    return;
  }

  if (state.currentView === "issues") {
    renderIssues();
    return;
  }

  renderTroubleshooting();
}

render();
