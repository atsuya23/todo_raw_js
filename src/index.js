import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグせいｓ
  const doneButton = document.createElement("button");
  doneButton.innerText = "完了";
  doneButton.addEventListener("click", () => {});

  // button(削除)タグせいｓ
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 推された削除ボタンの親タグ（div）を完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("undone-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("undone-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
