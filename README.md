AWS Amplify Demo Steps : 

1. First install AWS Amplify CLI
- npm install -g @aws-amplify/cli

2. Configure AWS Amplify
- amplify configure

3. Now create one react app
- npx create-react-app aws-amplify-demo

4. Navigate to your recently created react app root folder 
- cd aws-amplify-demo

5. Intialize the AWS Amplify
- amplify init

6. Install AWS Amplify library and pre-built react components
- npm install aws-amplify @aws-amplify/ui-react

7. Run your project locally
- npm start

8. Create one repo in GitHub and copy the repo clone URL.

9. Run below commands to upload your react app on GitHub
- git init

- git add .

- git commit –m "Initial commit"

- git branch –M main

- git remote add origin <repository URL>

- git push –f origin main

10. Now open AWS Console > AWS Amplify and upload your frontend react app.

Note : Contact Infra team to create one Service Role for your account.
