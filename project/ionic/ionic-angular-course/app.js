const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

// 添加之后清除输入框内的值
const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if( enteredReason.trim().length <= 0 || 
      enteredAmount <= 0 || 
      enteredAmount.trim().length <= 0
  ) {
    // 添加警告：没有输入或者输入的值不符合条件
    alertCtrl.create({ 
      message: 'Please enter valid reason and amount!', 
      header: 'Invalid inputs',
      buttons: ['Okay']
    })
    .then(alertElement => {
      alertElement.present();
    })
    return;
  }
  
  // 将输入框的值添加到列表
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;

  expensesList.appendChild(newItem);

  // 列表数据总价格
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

// 点击清除按钮清除输入框的值
cancelBtn.addEventListener('click', clear);