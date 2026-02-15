require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email configuration error:', error);
    } else {
        console.log('✅ Server is ready to send emails');
    }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required' 
        });
    }

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #14430c; border-bottom: 3px solid #14430c; padding-bottom: 10px;">New Contact Form Message</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #14430c;">From:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #14430c;">Email:</strong> <a href="mailto:${email}" style="color: #14430c;">${email}</a></p>
                    </div>
                    
                    <div style="margin: 20px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #14430c; border-radius: 5px;">
                        <h3 style="color: #14430c; margin-top: 0;">Message:</h3>
                        <p style="line-height: 1.6; color: #333;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p>This message was sent from your portfolio contact form.</p>
                        <p>Reply directly to <a href="mailto:${email}" style="color: #14430c;">${email}</a> to respond.</p>
                    </div>
                </div>
            </div>
        `,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully from ${email}`);
        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email will be sent to: ${process.env.EMAIL_USER || 'NOT CONFIGURED'}`);
});
