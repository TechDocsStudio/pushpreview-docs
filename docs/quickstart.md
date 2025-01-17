---
sidebar_position: 1
slug: /
---

# Quickstart

## test

Hello!

Welcome to the PushPreview documentation! In a few minutes, you'll have the pull request previews up and running on your repository.

## 1. Create your PushPreview account

To use the PushPreview, start by setting up your account:

1. Open [app.pushpreview.com](https://app.pushpreview.com).
2. Click on the **Sign Up** button located in the top bar.
3. Follow the on-screen instructions to set up your account.

With your account ready, move on to creating your first integration.

## 2. Create an integration

To create a new integration, follow these steps:

In your PushPreview dashboard, click the **Integrations** tab in the top navbar.

2. Click the **Create integration** button.

    ![Preview changes](./images/pushpreview-integration.png)

3. Complete the setup wizard:

    1. **Add the GitHub workflow to your repository:** Add the `pushpreview.yml` workflow under the `.github/workflow` directory of your repository.
    2. **Configure the GitHub secret:** Add the `PUSHPREVIEW_TOKEN` secret returned by the wizard within your repository's or organization's [GitHub settings](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).
    3. **Trigger the preview**: Add the  `preview` label to your pull requests to initiate the preview generation process. If the label doesn’t exist, [create a new one](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label).

:::info
If you encounter any issues, refer to the [Installation](category/installation) section for CMS-specific guides.
:::

## Next steps

Congratulations on setting up PushPreview! Your users can now view live previews of changes in pull requests, enhancing collaboration and review efficiency.
