export default async function addCredit(planId) {
    const res = await fetch('/api/user/credit/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({planId})
    });

    const r = await res.json();
    return r.success
}