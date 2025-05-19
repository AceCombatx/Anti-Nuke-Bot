# Anti Nuke Bot - The Ultimate Discord Server Security

![Anti Nuke Bot Logo](https://i.imgur.com/ehHTLBe.png)

## The Ultimate Protection for Your Discord Server
Prevent raids, nukes, spam, and more with our advanced security bot

[Invite Bot](https://discord.com/oauth2/authorize?client_id=1317483934879055992) | [Join Support Server](https://discord.gg/3P5zKB9MZp)

## Powerful Protection Features
Keep your server safe with our comprehensive security tools

### Anti-Nuke Protection
Prevent mass channel/role deletions, creations, name changes, and server image changes by automatically detecting and reverting malicious actions

### Anti-Raid Protection
Detect and stop raids by monitoring join patterns and automatically taking action

### Anti-Spam Protection
Prevent message spam and mass mentions with configurable thresholds and punishments, plus automatic spam message deletion

### Server Lockdown
Quickly lock all channels during emergencies with a single command

### Enhanced Logging
Keep track of all security events and server activities with detailed logs

### Fully Customizable
Configure every aspect of the bot to suit your server's specific needs with easy backups

## Why Choose Anti Nuke Bot?
The most comprehensive security solution for Discord

- Designed for server owners and moderators who want peace of mind
- Works with servers of all sizes, from small communities to large public servers
- Easy to set up with slash commands and intuitive configuration
- Constantly updated with new features and security improvements
- Trusted by thousands of servers to provide reliable protection
- Comprehensive help commands to assist with setup and troubleshooting

## Getting Started
Set up Anti Nuke Bot in your server in just a few minutes

### 1. Invite the Bot
Click the "Invite Bot" button to add Anti Nuke Bot to your server
[Invite Bot](https://discord.com/oauth2/authorize?client_id=1317483934879055992)

### 2. Set Up Logging
Create a channel for security logs and configure it with the bot
```
/setup-logging #security-logs
```

### 3. Configure Whitelist
Add trusted admins to the whitelist so they can configure the bot
```
/whitelist add @Admin
```

### 4. Enable Protection Features
Configure and enable each protection module to suit your server's needs
```
/antinuke-config enabled:true
/antiraid-config enabled:true
/antispam-config enabled:true
```

### 5. Check Protection Status
Verify that all protection features are properly set up and active
```
/protection-status
```

**Important!** All protection features require proper setup before they'll activate. Make sure you've completed steps 2, 3, and 4 for each protection feature you want to use. Use `/protection-status` to see which features are ready to use and which ones need more setup.

## Feature Details

### Anti-Nuke Protection
Prevent malicious users from destroying your server

#### How It Works
Anti-Nuke protection monitors your server for suspicious activities like mass channel or role deletions, creations, name changes, and server setting modifications. When someone tries to "nuke" your server or make unauthorized changes, the bot will automatically detect this behavior, take action against the offender, and revert any unauthorized changes.

#### Key Features
- Monitors channel and role deletions, creations, and name changes
- Protects against server name and icon/banner changes
- Automatically reverts unauthorized changes
- Monitors mass bans and webhook creations
- Configurable thresholds to determine what counts as suspicious activity
- Customizable punishments (ban, kick, or mute)
- Automatic logging of all detected nuke attempts
- Whitelist system for trusted admins

#### Configuration
Use the `/antinuke-config` command to view and modify your Anti-Nuke settings:

- Enable/Disable: `/antinuke-config enabled:true`
- Channel Delete Threshold: `/antinuke-config channel_delete_threshold:3`
- Role Delete Threshold: `/antinuke-config role_delete_threshold:3`
- Channel Create Threshold: `/antinuke-config channel_create_threshold:3`
- Role Create Threshold: `/antinuke-config role_create_threshold:3`
- Name Change Threshold: `/antinuke-config name_change_threshold:3`
- Punishment: `/antinuke-config punishment:ban`

💡 Need help with anti-nuke setup? Use `/nuke-help` for a detailed guide.

### Anti-Raid Protection
Stop coordinated attacks on your server

#### How It Works
Anti-Raid protection monitors the rate at which new users join your server. If too many users join in a short period of time, the bot will activate raid mode and take action against new joins to prevent the raid from continuing.

#### Key Features
- Monitors join patterns to detect coordinated raids
- Automatic raid mode activation when suspicious join activity is detected
- Manual raid mode toggle for when you anticipate or suspect a raid
- Configurable join rate thresholds and time windows
- Customizable punishments for raiders (ban, kick, or mute)

#### Configuration
Use the `/antiraid-config` command to view and modify your Anti-Raid settings:

- Enable/Disable: `/antiraid-config enabled:true`
- Join Rate Threshold: `/antiraid-config join_rate:5`
- Time Window (seconds): `/antiraid-config time_window:10`
- Punishment: `/antiraid-config punishment:kick`

#### Manual Raid Mode
You can manually activate or deactivate raid mode with the `/raid-mode` command:

- Activate Raid Mode: `/raid-mode action:activate`
- Deactivate Raid Mode: `/raid-mode action:deactivate`

💡 Need help with anti-raid setup? Use `/raid-help` for a detailed guide.

### Anti-Spam Protection
Keep your channels clean and readable

#### How It Works
Anti-Spam protection monitors the rate at which users send messages and the number of mentions in those messages. If a user sends too many messages too quickly or includes too many mentions, the bot will take action to prevent spam and automatically delete the spam messages.

#### Key Features
- Message rate monitoring to prevent rapid-fire spam
- Mass mention detection to prevent ping spam
- Automatic deletion of spam messages
- Warning system for first-time offenders
- Configurable thresholds and time windows
- Customizable punishments (ban, kick, or mute)

#### Configuration
Use the `/antispam-config` command to view and modify your Anti-Spam settings:

- Enable/Disable: `/antispam-config enabled:true`
- Message Threshold: `/antispam-config message_threshold:5`
- Time Window (seconds): `/antispam-config time_window:3`
- Punishment: `/antispam-config punishment:mute`
- Mute Duration (minutes): `/antispam-config mute_duration:10`

#### Anti-Mass-Mention Configuration
Use the `/antimention-config` command to configure mass mention protection:

- Enable/Disable: `/antimention-config enabled:true`
- Mention Threshold: `/antimention-config mention_threshold:5`
- Punishment: `/antimention-config punishment:mute`
- Mute Duration (minutes): `/antimention-config mute_duration:5`

💡 Need help with anti-spam setup? Use `/spam-help` for a detailed guide.

### Server Lockdown
Emergency protection for critical situations

#### How It Works
Server Lockdown allows you to quickly lock all channels in your server, preventing anyone from sending messages. This is useful during raids, spam attacks, or any other emergency situation where you need to quickly regain control of your server.

#### Key Features
- One command to lock all channels
- One command to unlock all channels
- Custom reason for audit logs
- Automatic logging of lockdown events

#### Using Lockdown
Use the `/lockdown` command to enable or disable server lockdown:

- Enable Lockdown: `/lockdown action:enable reason:Raid in progress`
- Disable Lockdown: `/lockdown action:disable reason:Situation resolved`

ℹ️ Only server owners and whitelisted users can use the lockdown command.

### Enhanced Logging
Keep track of everything happening in your server

#### How It Works
Enhanced Logging provides detailed logs of all security events and server activities. This helps you keep track of what's happening in your server and investigate any security incidents.

#### What Gets Logged
- Security events (nuke attempts, raids, spam)
- Member joins and leaves
- Message edits and deletions
- Channel and role creations, deletions, and name changes
- Server name and icon changes
- Member bans and unbans
- Server setting changes
- Voice channel activity

#### Setting Up Logging
Use the `/setup-logging` command to configure your logging channel:

- Set Logging Channel: `/setup-logging #security-logs`

ℹ️ It's recommended to create a private channel for logs that only moderators can access.

⚠️ **Important:** Setting up logging is REQUIRED for all protection features to work properly!

## Command Reference
All the commands you need to manage Anti Nuke Bot

### Setup Commands
- `/setup-logging` - Set up the logging channel for protection events
- `/whitelist` - Add or remove users from the configuration whitelist
- `/protection-status` - View the current protection status for this server

### Configuration Commands
- `/antinuke-config` - Configure anti-nuke protection settings
- `/antiraid-config` - Configure anti-raid protection settings
- `/antispam-config` - Configure anti-spam protection settings
- `/antimention-config` - Configure anti-mass-mention protection settings

### Protection Commands
- `/raid-mode` - Manually activate or deactivate raid protection mode
- `/lockdown` - Lock all channels to prevent messages during raids or attacks

### Utility Commands
- `/config-backup` - Create a backup of server configurations
- `/config-restore` - Restore server configurations from a backup

### Help Commands
- `/errors` - View common errors and their solutions
- `/nuke-help` - Get help with anti-nuke configuration
- `/spam-help` - Get help with anti-spam configuration
- `/raid-help` - Get help with anti-raid configuration
- `/config-help` - Get help with bot configuration and backup
- `/features` - View all available protection features

## Frequently Asked Questions

### Why aren't the protection features working?
All protection features require proper setup before they'll activate. Make sure you've:
1. Set up logging with `/setup-logging #channel`
2. Added at least one admin to the whitelist with `/whitelist add @Admin`
3. Enabled the specific protection feature (e.g., `/antinuke-config enabled:true`)

Use `/protection-status` to check which features are ready and which need more setup.

### Who can configure the bot?
By default, only the server owner can configure the bot. The server owner can add trusted admins to the whitelist using the `/whitelist add @User` command, which will allow them to configure the bot as well.

### What permissions does the bot need?
Anti Nuke Bot needs the following permissions to function properly:
- Administrator - To ensure the bot does not encounter any permission errors.
- View Channels - To monitor server activity
- Manage Channels - To lock channels during lockdown
- Kick Members - To remove raiders and spammers
- Ban Members - To ban users who attempt to nuke the server
- Manage Roles - To apply mutes and manage permissions
- View Audit Log - To detect nuke attempts and other malicious actions
- Send Messages - To send warnings and notifications
- Manage Messages - To delete spam messages
- Read Message History - For logging and monitoring

Additionally, the bot's role should be positioned at the top of your server's role list to ensure it can manage all roles.

### Will the bot punish server admins?
No, the bot will not punish the server owner or any users on the whitelist. This ensures that trusted admins can perform administrative actions without triggering the bot's protection measures.

### What should I do if my server is being raided?
If your server is being raided, you should:
1. Activate raid mode with `/raid-mode action:activate`
2. Enable server lockdown with `/lockdown action:enable reason:Raid in progress`
3. Wait for the raid to subside
4. Disable lockdown with `/lockdown action:disable reason:Raid over`
5. Deactivate raid mode with `/raid-mode action:deactivate`

### How do I fix common errors?
The bot includes a comprehensive error troubleshooting system. Use the `/errors` command to access an interactive guide for fixing common issues. This includes solutions for:
- Bot permission problems
- Setup and configuration issues
- Protection features not working
- Command errors
- And more

You can also use specific help commands like `/nuke-help`, `/spam-help`, etc., for feature-specific guidance.

### Can I use the bot on multiple servers?
Yes, Anti Nuke Bot can be used on multiple servers simultaneously. Each server has its own independent configuration, so you can customize the bot differently for each server based on their specific needs.

### How do I report bugs or suggest features?
You can report bugs or suggest features by joining our support server. Click the "Join Support Server" button in the Support section below to get help from our team and community.

### Is there a premium version of the bot?
Right now, all of Anti Nuke Bot's main security features are completely free, and that's how we plan to keep it. We do offer two premium extras: File Scanning and Custom Bot Instances, which help support development. But everything you need to protect your server is free and ready to use. Keeping your community safe shouldn't come with a price tag.

## Support
Get help with Anti Nuke Bot

### Support Server
Join our Discord server for help from our team and community
[Join Support Server](https://discord.gg/3P5zKB9MZp)

### Documentation
Read our detailed documentation for in-depth information
[View Documentation](https://volarissolutions.gitbook.io/anti-nuke-bot)

### In-Bot Help
Use our comprehensive help commands right in Discord
```
/errors
/features
/config-help
```

## Ready to Secure Your Server?
Add Anti Nuke Bot to your Discord server today and keep your community safe
[Invite Bot](https://discord.com/oauth2/authorize?client_id=1317483934879055992)

---

© 2025 Anti Nuke Bot. All rights reserved.
```

```md project="Anti Nuke Bot" file="PRIVACY-POLICY.md" type="markdown"
# Privacy Policy

*Last Updated: April 14, 2025*

This Privacy Policy explains how Anti Nuke Bot ("we", "us", "our") collects, uses, and shares information about you when you use our Discord bot ("the Bot").

By using the Bot, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.

## 1. Information We Collect

We collect the following information when you use our Bot:

- **Server Information:** When you add the Bot to a Discord server, we collect the server ID, server name, and server member count.
- **User Information:** We collect Discord user IDs and usernames of server members who interact with the Bot or trigger security events.
- **Configuration Data:** We store configuration settings that you set for the Bot in your server, such as protection thresholds, punishment settings, and whitelist information.
- **Log Data:** We collect information about security events and actions taken by the Bot, including channel creations/deletions, role changes, message deletions, and user joins/leaves, which is stored in your server.

## 2. How We Use Your Information

We use the information we collect to:

- Provide, maintain, and improve the Bot's functionality
- Detect and prevent security threats to your Discord server
- Apply your configured protection settings
- Generate logs and reports of security events
- Respond to your requests and support inquiries
- Monitor and analyze usage patterns to improve the Bot

## 3. Data Storage and Security

We store the data we collect in secure databases. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.

Your data is stored only as long as necessary to provide the Bot's services. If you remove the Bot from your server, your configuration data will be deleted after 30 days.

## 4. Data Sharing

We do not sell, trade, or otherwise transfer your information to third parties. We may share your information in the following circumstances:

- With service providers who help us operate the Bot (such as hosting providers)
- If required by law, such as to comply with a legal process
- To protect our rights, privacy, safety, or property
- In connection with a merger, acquisition, or sale of assets

## 5. Your Rights

You have the right to:

- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your information
- Object to our processing of your information
- Request a copy of your information in a structured, machine-readable format

To exercise these rights, please contact us through our [Discord Support Server](https://discord.gg/3P5zKB9MZp).

## 6. Children's Privacy

The Bot is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.

## 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## 8. Discord's Privacy Policy

Since our Bot operates on the Discord platform, your use of the Bot is also subject to [Discord's Privacy Policy](https://discord.com/privacy).

## 9. Contact Us

If you have any questions about this Privacy Policy, please contact us through our [Discord Support Server](https://discord.gg/3P5zKB9MZp).
```

```md project="Anti Nuke Bot" file="COOKIE-POLICY.md" type="markdown"
# Cookie Policy

*Last Updated: April 14, 2025*

This Cookie Policy explains how Anti Nuke Bot ("we", "us", "our") uses cookies and similar technologies on our website. This policy is part of our Privacy Policy and explains what cookies are, how we use them, and what choices you have regarding their use.

## 1. What Are Cookies?

Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.

Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.

## 2. How We Use Cookies

We use cookies for the following purposes:

- **Essential Cookies:** These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
- **Preference Cookies:** These cookies allow the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.
- **Analytics Cookies:** These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website.

## 3. Specific Cookies We Use

Our website uses the following cookies:

- **theme:** This cookie remembers your preferred theme (light or dark mode). It is a persistent cookie that expires after 1 year.
- **session:** This cookie manages your session state. It is a session cookie that expires when you close your browser.

## 4. Third-Party Cookies

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and improve the user experience.

- **Google Analytics:** We use Google Analytics to analyze the use of our website. Google Analytics generates statistical and other information about website use by means of cookies. The information generated relating to our website is used to create reports about the use of the website. Google will store and use this information. Google's privacy policy is available at: [https://policies.google.com/privacy](https://policies.google.com/privacy).

## 5. Managing Cookies

Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.

You can manage your cookie preferences through your browser settings:

- [Google Chrome](https://support.google.com/chrome/answer/95647)
- [Mozilla Firefox](https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences)
- [Safari](https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac)
- [Internet Explorer](https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies)
- [Microsoft Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

## 6. Changes to This Cookie Policy

We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top.

You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.

## 7. Contact Us

If you have any questions about our Cookie Policy, please contact us through our [Discord Support Server](https://discord.gg/3P5zKB9MZp).
```

```md project="Anti Nuke Bot" file="TERMS-OF-SERVICE.md" type="markdown"
# Terms of Service

*Last Updated: April 14, 2025*

Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Anti Nuke Bot ("the Bot", "our Bot", "we", "us", or "our").

Your access to and use of the Bot is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Bot.

By accessing or using the Bot, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Bot.

## 1. Use of the Bot

Anti Nuke Bot is a Discord bot designed to provide security and moderation features for Discord servers. By using our Bot, you agree to use it only for its intended purposes and in compliance with Discord's Terms of Service and Community Guidelines.

You are responsible for all activity that occurs under your Discord account in relation to our Bot. You agree not to:

- Use the Bot to violate Discord's Terms of Service or Community Guidelines
- Attempt to gain unauthorized access to the Bot's systems or networks
- Use the Bot to harass, abuse, or harm others
- Use the Bot to engage in any illegal activities
- Interfere with or disrupt the Bot or servers or networks connected to the Bot
- Attempt to reverse engineer, decompile, or disassemble the Bot

## 2. Changes to the Bot

We reserve the right to modify or discontinue, temporarily or permanently, the Bot or any service to which it connects, with or without notice and without liability to you.

## 3. Changes to Terms

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Bot after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Bot.

## 4. Disclaimer of Warranties

The Bot is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the Bot will be uninterrupted or error-free, that defects will be corrected, or that the Bot is free of viruses or other harmful components.

## 5. Limitation of Liability

In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

- Your access to or use of or inability to access or use the Bot
- Any conduct or content of any third party on the Bot
- Any content obtained from the Bot
- Unauthorized access, use, or alteration of your transmissions or content

## 6. Indemnification

You agree to defend, indemnify, and hold harmless us and our licensors, and our respective employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:

- Your use of and access to the Bot
- Your violation of any term of these Terms
- Your violation of any third-party right, including without limitation any copyright, property, or privacy right
- Any claim that your use of the Bot caused damage to a third party

## 7. Governing Law

These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

## 8. Discord Terms of Service

In addition to these Terms, you also agree to be bound by Discord's Terms of Service when using our Bot, as our Bot operates on the Discord platform.

## 9. Contact Us

If you have any questions about these Terms, please contact us through our [Discord Support Server](https://discord.gg/3P5zKB9MZp).
```

I've successfully converted all four HTML files into well-formatted markdown files. Each file maintains the original content structure while using proper markdown formatting for headings, lists, links, and emphasis.

The README.md file contains all the main content from the index.html file, including features, setup instructions, and FAQs. The other three files (PRIVACY-POLICY.md, COOKIE-POLICY.md, and TERMS-OF-SERVICE.md) contain their respective legal content.

All links have been preserved, and I've used markdown formatting to maintain the visual hierarchy of the original HTML documents.

