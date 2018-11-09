const OTPAuth = require('otpauth');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

function generateToken() {
    const totp = new OTPAuth.TOTP({
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromB32(process.env.TOTPSECRET)
    });

    let token = totp.generate();
    return String(token);
}

const suppose = require('suppose');

suppose(
    'openconnect', [process.env.VPN],
    {debug: fs.createWriteStream('./debug.txt')}
)
    .when("Username:")
    .respond(process.env.USERNAME + '\n')
    .when('Password:')
    .respond(process.env.PASSWORD + '\n')
    .when("Enter '0' to abort.")
    .respond(process.env.OPTIONTOTP + '\n')
    .when("Enter '0' to abort.")
    .respond(generateToken() + '\n')
    .when("Crappy text to prevent exit!")
    .respond("Dont!")
    .on('error', function(err){
        console.log('Exit about an error!');
        console.log(err.message);
    })
    .end(function(code){
        console.log('Done exit normally!');
        console.log(code) // 0
    });