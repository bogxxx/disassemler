var struct = {
    0x00:{
        name: ["NEG", "BTJT"],
        size: [1, 3],
        pref: [NaN, 72],
        operands: [["XX"], ["MS", "LS", "XX"]],
        description: ["Negate (Logical 2's complement)", "BitTest and Jump if True"],
        example: ["M(soff+SP) <= -M(soff+SP)", "PC<=PC+ssoff if M(lmem).#0==1 СС.C<=M(lmem).#0"]
    },


}