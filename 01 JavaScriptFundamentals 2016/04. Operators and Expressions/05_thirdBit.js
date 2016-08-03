

function thirdBit(args) {
    var num = +args[0],
        position = 3,
        mask,
        numAndMask,
        bit;

        mask = 1 << position;
        numAndMask = num & mask;
        bit = numAndMask >> position;
        console.log(bit);
}

thirdBit([15]);