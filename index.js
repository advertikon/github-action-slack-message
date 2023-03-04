import { getInput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import fetch from 'node-fetch';

try {
    const url = getInput('channel-url');
    const status = getInput('status');

    await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": `${context.payload.repository.name} ${status === 'success' ? ':thumbsup:' : ':rage:'}`,
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Commits:*\n" + context.payload.commits.map(c => {
                            return `${c.author.name}: ${c.message} <${c.url}|check differences>`
                        }).join("\n")
                    },
                }
            ]
        })
    });

} catch (error) {
    setFailed(error.message);
}

