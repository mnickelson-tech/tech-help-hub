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
*/

const TROUBLESHOOTING_TREE = {
  techTicketUrl: "https://example.com/replace-with-your-tech-ticket-form",
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
            { type: "next", text: "Try a different outlet and check if the power cable is firmly connected." },
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
      description: "Display and clarity fixes",
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
          id: "projector-blurry",
          title: "Projector image is blurry",
          icon: "🔍",
          steps: [
            { type: "quick", text: "Adjust the focus ring on projector lens." },
            { type: "quick", text: "Make sure projector is facing screen straight on." },
            { type: "next", text: "Clean lens gently with a microfiber cloth." },
            { type: "escalate", text: "If image remains blurry, submit a tech ticket for projector maintenance." }
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
            { type: "quick", text: "If the power light is off, unplug the power cable from the docking station, wait 5 seconds, and firmly plug it back in." },
            { type: "quick", text: "Unplug the USB-C/Thunderbolt cable from the laptop and plug it back in firmly." },
            { type: "next", text: "Press and hold the Windows key, then press P. A panel will appear on the right side of the screen. Click 'Duplicate' to mirror your screen to the monitor, or 'Extend' to use it as a second screen." },
            { type: "escalate", text: "If the monitor still has no signal, submit a tech ticket with room number and docking station model." }
          ]
        },
        {
          id: "docking-not-charging",
          title: "Laptop not charging through dock",
          icon: "🔋",
          steps: [
            { type: "quick", text: "Confirm the docking station power cable is fully seated in the dock and the outlet." },
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

  wrapper.append(heading, intro, stepList, controls, helpBox);
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
