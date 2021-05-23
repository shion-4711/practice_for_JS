import "./styles.css";

// 未完了リストに追加
const onClickAdd = () => {
  const inputText = document.querySelector("#add-txt").value;
  document.querySelector("#add-txt").value = "";

  addToIncomplete(inputText);
};

const deeteFromIncomlete = (tgt) => {
  document.querySelector("#incomplete-list").removeChild(tgt);
};

const addToIncomplete = (txt) => {
  // 未完了リストの項目作成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = txt;

  // DONEボタン作成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "DONE";
  // DONE押下時の処理
  completeBtn.addEventListener("click", () => {
    // div取得
    const doneTgt = completeBtn.parentNode;
    const txt = doneTgt.firstElementChild.innerText;

    // 未完了エリアからdiv削除
    deeteFromIncomlete(doneTgt);
    doneTgt.textContent = null;

    //新規li作成
    const doneLi = document.createElement("li");
    doneLi.innerText = txt;

    //REMOVE作成
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "REMOVE";
    //REMOVE押下時の処理
    removeBtn.addEventListener("click", () => {
      const removeTgt = removeBtn.parentNode;
      document.querySelector("#complete-list").removeChild(removeTgt);

      const removeTxt = removeTgt.firstElementChild.innerText;
      addToIncomplete(removeTxt);
    });

    //divにliとbtnをappend
    doneTgt.appendChild(doneLi);
    doneTgt.appendChild(removeBtn);

    //完了エリアへdivをappend
    document.querySelector("#complete-list").appendChild(doneTgt);
  });

  // DELETEボタン作成
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "DELETE";
  // DELETE押下時の処理
  deletebtn.addEventListener("click", () => {
    deeteFromIncomlete(deletebtn.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deletebtn);

  document.querySelector("#incomplete-list").appendChild(div);
};

document
  .querySelector("#add-btn")
  .addEventListener("click", () => onClickAdd());
