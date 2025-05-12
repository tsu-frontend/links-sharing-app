let addNewLinkElement = document.querySelector(".addNewLink");
let emtyFormElement = document.querySelector(".empty-form");
let inputGroup = document.querySelector(".inputGroup");
let emtyDivsFroLinks = document.querySelector(".finalLinks");
let choosenSocialLinsk = [];

let formInputs = `<div class="form-inputs flex flex-col w-full bg-[#FAFAFA] p-5 relative">
    <div class="inputs-info flex justify-between mb-3">
      <p class="text-[#737373]">
        = <span class="font-bold">Link #<span class="number">1</span></span>
      </p>
      <button type="button"  class="cursor-pointer removeBtn capitalize text-[#737373]">remove</button>
    </div>
    <div class="inputs">
      <div>
        <label class="block capitalize mb-1 text-[#333]" for="platform">platform</label>
        <div type="button" class="dropDown relative">
          <div class="socialIcones flex gap-3 rounded-lg w-full border border-[#D9D9D9] pt-3 pb-3 pl-4 pr-4">
            <img src="../assets/images/icon-github.svg" alt="icone" />
            <p class="font-[400px] text-lg">GitHub</p>
            <button class="dropDownBtn ml-auto cursor-pointer">
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
          <input class="w-full outline-0" type="text" placeholder="e.g. https://www.github.com/johnappleseed" id="link" />
        </div>
      </div>
    </div>
  </div>`;

// main click event to create new form from add new link
addNewLinkElement.addEventListener("click", () => {
  addNewLinkHandler();

  registerDropDownEventListeners();
  registerRemoveButtonEventListeners();
  registerDropdownItemSelection();
});

// createing new link form
function addNewLinkHandler() {
  emtyFormElement.classList.add("hidden");
  let nodeDiv = document.createElement("div");
  nodeDiv.classList.add("empty-cont");
  nodeDiv.innerHTML = formInputs;
  inputGroup.appendChild(nodeDiv);
  inputGroup.classList.remove("hidden");
}

// event register to drop drop down input options
function registerDropDownEventListeners() {
  let dropDpwnBtns = document.querySelectorAll(".dropDownBtn");
  let dropDownContent = document.querySelectorAll(".dropDownContent");

  dropDpwnBtns.forEach((item, index) => {
    if (!item.hasAttribute("ivent-registered")) {
      item.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = dropDownContent[index];
        const isVisible = !dropdown.classList.contains("hidden");

        dropDownContent.forEach((el) => el.classList.add("hidden"));
        dropDpwnBtns.forEach((btn) => btn.classList.remove("rotate-180"));

        if (!isVisible) {
          dropdown.classList.remove("hidden");
          item.classList.add("rotate-180");
        }
      });

      dropDownContent[index].addEventListener("click", (e) => {
        e.stopPropagation();
      });

      item.setAttribute("ivent-registered", "true");
    }
  });
}

// logic to close dropdown content if click somewere else
document.addEventListener("click", () => {
  document.querySelectorAll(".dropDownContent").forEach((el) => el.classList.add("hidden"));
  document.querySelectorAll(".dropDownBtn").forEach((btn) => btn.classList.remove("rotate-180"));
});

// logic to delete form
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

        let parentDivs = document.querySelector(".form-inputs");
        if (!parentDivs) {
          emtyFormElement.classList.remove("hidden");
        }
      });

      btn.setAttribute("ivent-registered-remove", "true");
    }
  });
}

function registerDropdownItemSelection() {
  const items = document.querySelectorAll(".dropDownContent > div");

  items.forEach((item) => {
    if (!item.hasAttribute("ivent-registered-choose")) {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const icone = item.children[0].src;
        const linkname = item.children[1].textContent;

        item.parentElement.previousElementSibling.children[0].src = `../assets/images/${icone.substring(
          icone.lastIndexOf("/") + 1
        )}`;

        item.parentElement.previousElementSibling.children[1].textContent = linkname;

        item.parentElement.previousElementSibling.children[2].classList.remove("rotate-180");

        item.parentElement.classList.add("hidden");

        let insertedContent = `<div class="w-full h-full flex gap-2 items-center">
              <img src="../assets/images/${icone.substring(
                icone.lastIndexOf("/") + 1
              )}" alt="icone" />
              <p>${linkname}</p>
              <img src="../assets/images/icon-arrow-right.svg" alt="icone" class="ml-auto" />
            </div>`;

        console.log(insertedContent);

        let childrenn = emtyDivsFroLinks.children;
        for (let i = 0; i < childrenn.length; i++) {
          if (!childrenn[i].innerHTML) {
            childrenn[i].innerHTML = insertedContent;
            break;
          }
        }
      });

      item.setAttribute("ivent-registered-choose", "true");
    }
  });
}

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelectorAll(".inputs").forEach((item) => {
    emtyFormElement.classList.remove("hidden");

    let chossenObjct = {
      iconePath: item.firstElementChild.lastElementChild.firstElementChild.children[0].src,
      iconeName: item.firstElementChild.lastElementChild.firstElementChild.children[1].textContent,
      socialLink: item.lastElementChild.lastElementChild.lastElementChild.value,
    };
    choosenSocialLinsk.push(chossenObjct);
    inputGroup.innerHTML = ``;
  });
});
