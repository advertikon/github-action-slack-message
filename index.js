import { getInput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import fetch from 'node-fetch';

try {
    const url = getInput('channel-url');
    const status = getInput('status');

    console.log(JSON.stringify(context, null, 2))

    await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            text: `New release in ${context.repository.name}`,
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `${context.repository.name}: ${status ? 'new release' : 'error'}`
                    }
                }
            ]
        })
    });

} catch (error) {
    setFailed(error.message);
}

