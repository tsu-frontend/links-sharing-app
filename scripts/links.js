let addNewLinkElement = document.querySelector(".addNewLink");
let emtyFormElement = document.querySelector(".empty-form");
let imputGroup = document.querySelector(".imputGroup");

let formImputs = `<div class="form-imputs flex flex-col w-full bg-[#FAFAFA] p-5 relative">
    <div class="inputs-info flex justify-between mb-3">
      <p class="text-[#737373]">
        = <span class="font-bold">Link #<span class="number">1</span></span>
      </p>
      <button type="button"  class="removeBtn capitalize text-[#737373]">remove</button>
    </div>
    <div class="inputs">
      <div>
        <label class="block capitalize mb-1 text-[#333]" for="platform">platform</label>
        <div type="button" class="dropDown relative">
          <div class="socialIcones flex gap-3 rounded-lg w-full border border-[#D9D9D9] pt-3 pb-3 pl-4 pr-4">
            <img src="../assets/images/icon-github.svg" alt="icone" />
            <p class="font-[400px] text-lg">GitHub</p>
            <button class="dromDownBtn ml-auto cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9">
                <path stroke="#633CFF" stroke-width="2" d="m1 1 6 6 6-6" />
              </svg>
            </button>
          </div>

          <!-- Dropdown content (hidden by default) -->
          <div class="dropDownContent absolute w-full min-h-[200px] bg-[#fff] z-[9999]  rounded-lg bottom-[-260px] hidden p-4 pt-0 pb-0 border border-[#D9D9D9]">
            <div class="flex gap-3 border-b border-[#D9D9D9] pb-3 pt-3">
              <img src="../assets/images/icon-github.svg" alt="icone" />
              <p>GitHub</p>
            </div>
            <div class="flex gap-3 border-b border-[#D9D9D9] pb-3 pt-3">
              <img src="../assets/images/icon-youtube.svg" alt="icone" />
              <p>YouTube</p>
            </div>
            <div class="flex gap-3 border-b border-[#D9D9D9] pb-3 pt-3">
              <img src="../assets/images/icon-linkedin.svg" alt="icone" />
              <p>LinkedIn</p>
            </div>
            <div class="flex gap-3 border-b border-[#D9D9D9] pb-3 pt-3">
              <img src="../assets/images/icon-facebook.svg" alt="icone" />
              <p>Facebook</p>
            </div>
            <div class="flex gap-3 pb-3 pt-3">
              <img src="../assets/images/icon-frontend-mentor.svg" alt="icone" />
              <p>Frontend</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label class="block capitalize mb-1 text-[#333] mt-3" for="link">Link</label>
        <div class="flex w-full pt-3 pb-3 pl-4 pr-4 gap-3 border border-[#D9D9D9] rounded-lg">
          <img src="../assets/images/icon-links-header.svg" alt="" />
          <input class="w-full" type="text" placeholder="e.g. https://www.github.com/johnappleseed" id="link" />
        </div>
      </div>
    </div>
  </div>`;

addNewLinkElement.addEventListener("click", () => {
  addNewLinkHandler();

  registerDropDownEventListeners();
  registerRemoveButtonEventListeners();
});

function addNewLinkHandler() {
  emtyFormElement.classList.add("hidden");
  let nodeDiv = document.createElement("div");
  nodeDiv.classList.add("empty-cont");
  nodeDiv.innerHTML = formImputs;
  imputGroup.appendChild(nodeDiv);
}

function registerDropDownEventListeners() {
  let dropDpwnBtns = document.querySelectorAll(".dromDownBtn");
  let dropDownContent = document.querySelectorAll(".dropDownContent");

  dropDpwnBtns.forEach((item, index) => {
    if (!item.hasAttribute("ivent-registered")) {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const dropdown = dropDownContent[index];

        dropdown.classList.toggle("hidden");
      });

      item.setAttribute("ivent-registered", "true");
    }
  });
}

function registerRemoveButtonEventListeners() {
  let removeBtns = document.querySelectorAll(".removeBtn");

  removeBtns.forEach((btn) => {
    if (!btn.hasAttribute("ivent-registered-remove")) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        let parentDiv = btn.closest(".empty-cont");
        if (parentDiv) {
          parentDiv.remove();
        }

        let parentDivs = document.querySelector(".form-imputs");
        if (!parentDivs) {
          emtyFormElement.classList.remove("hidden");
        }
      });

      btn.setAttribute("ivent-registered-remove", "true");
    }
  });
}
