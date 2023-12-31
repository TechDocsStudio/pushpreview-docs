---
sidebar_position: 1
slug: /
---

# Quickstart

Welcome to the PushPreview documentation! In a few minutes, you'll have the pull request previews up and running on your repository.

## 1. Create your PushPreview account

To use the PushPreview, start by setting up your account:

1. Open [app.pushpreview.com](https://app.pushpreview.com).
2. Click on the **Sign Up** button located in the top bar.
3. Follow the on-screen instructions to set up your account.

With your account ready, move on to creating your first integration.

## 2. Create an integration

To create a new integration, follow these steps:

1. In the PushPreview dashboard, go to the **Integrations** tab.
2. Click the **Create integration** button.
3. Complete the setup wizard:

    1. **Add the GitHub workflow to your repository:** Add the pushpreview.yml workflow to your repository. This workflow responds to pull requests and comments, triggering previews.
    2. **Configure the Github secret:** Add the `PUSHPREVIEW_TOKEN` secret in your repository's or organization's GitHub settings to authenticate requests.
    3. **Trigger the preview**: Add the tag `preview` to your pull requests to initiate the preview generation process. The preview tag can be selected from existing tags or created anew if it doesn't exist.

:::info
If you encounter any issues, refer to the [Installation](category/installation) section for CMS-specific guides.
:::

## Next steps

Congratulations on setting up PushPreview! Your users can now view live previews of changes in pull requests, enhancing collaboration and review efficiency.