/**
 * @file	attack.w.js
 * @author	cellman123 <github.com/stickyfingies>
 * 
 * @breif	Calls hack(), weaken(), and grow() on a
 * 			server target when certain numerical conditions
 * 			are met.
 */

/**
 * @param {NS} ns
 * @param {string} host
 */
 async function attackServer(ns, host) {
	const moneyThresh = ns.getServerMaxMoney(host) * 0.75;
	const securityThresh = ns.getServerMinSecurityLevel(host) + 5;

	if (ns.getServerSecurityLevel(host) > securityThresh) {
		await ns.weaken(host);
	} else if (ns.getServerMoneyAvailable(host) < moneyThresh) {
		await ns.grow(host);
	} else {
		await ns.hack(host);
	}
}

/** @param {NS} ns */
export async function main(ns) {
	while (true) {
		for (const host of ns.args) {
			await attackServer(ns, host);
		}
	}
}