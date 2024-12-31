export async function getDomainIPs(domain) {
	const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
	// console.log(await response.json());
	const { Answer } = await response.json();
	const ips = Answer.map(item => item.data);
	return ips;
}
