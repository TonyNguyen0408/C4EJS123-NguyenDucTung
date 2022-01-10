// 1. Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.
let array = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
function allLongestStrings(inputArray) {
    let maxLength = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++) {
        if (maxLength < inputArray[i].length) {
            maxLength = inputArray[i].length;
        }
    }

    let result = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == maxLength) {
            result.push(inputArray[i]);
        }
    }
    console.log(result)
}
allLongestStrings(array);

