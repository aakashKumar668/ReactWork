import { RecaptchaVerifier, signInWithPhoneNumber, auth } from "../../firebase";
import { useState } from "react";

function PhoneLogin ()
{
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmObj, setConfirmObj] = useState(null);

    const sendOtp = async () =>
    {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
            size: "invisible",
        });

        try
        {
            const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
            setConfirmObj(confirmation);
            alert("OTP sent!");
        } catch (err)
        {
            console.error(err);
        }
    };

    const verifyOtp = async () =>
    {
        try
        {
            await confirmObj.confirm(otp);
            alert("Phone verified!");
        } catch (err)
        {
            console.error(err);
        }
    };

    return (
        <div className="p-4">
            <input type="text" placeholder="+91..." value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={sendOtp}>Send OTP</button>
            <div id="recaptcha"></div>
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifyOtp}>Verify OTP</button>
        </div>
    );
}

export default PhoneLogin;
