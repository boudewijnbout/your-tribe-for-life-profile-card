import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const UID = 'boudewijn';
    const client = createClient({ fetch, request });
    const document = await client.getByUID('businesscard', UID);

    if (document) {
        return { document: document.data };
    }

    error(404, 'Not found');
}