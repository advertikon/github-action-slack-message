# github-action-slack-message
GitHub action to send message to Slack

## Inputs

### `chanel-url`

**Required** Slack channel to send message to.

### `status`

**Required** Job status (${{ job.status }}).

## Example usage

```yaml
uses: advertikon/github-action-slack-message@main
with:
  channel-url: ${{ secrets.SLACK_WEBHOOK_URL }}
  status: ${{ job.status }}
```
