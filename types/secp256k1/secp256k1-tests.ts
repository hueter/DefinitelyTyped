import { SignOptions, sign } from "secp256k1";

const opts: SignOptions = {
    data: Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
};

const message = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const prvKey = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

sign(message, prvKey, opts);
