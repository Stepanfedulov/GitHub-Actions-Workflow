function isEvenDay() {
    return new Date().getDate() % 2 === 0;
}

const dayOfMonth = new Date().getDate();

if (isEvenDay()) {
    console.log(`Сегодня ${dayOfMonth} число, оно чётное.`);
} else {
    console.log(`Сегодня ${dayOfMonth} число, оно нечётное.`);
}

module.exports = { isEvenDay };