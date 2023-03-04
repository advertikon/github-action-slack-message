import { getInput, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';

try {
    const url = getInput('channel-url');
    const status = getInput('status');
    const octokit = getOctokit();

    await octokit.request(`POST ${url}`, {
        headers: {
            'Content-type': 'application/json'
        },
        text: `New release in ${context.repository.name}`,
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${context.repository.name}: ${status ? 'new release' : 'error'}`
                }
            }
        ]
    });

} catch (error) {
    setFailed(error.message);
}

