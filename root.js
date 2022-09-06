/**
 * @file	root.js
 * @author	Ayden <github.com/galaxine-senpai>
 * 
 * @breif	Gets root access on a server and gets money.
 */
/**
 * @param {NS} ns // Define NS for bitburner
 * @param {String} server // The server to hack
 */

async function rootthings(ns, server) {
    await ns.ftpcrack(server);
    await ns.brutessh(server); // Execute pre-reqs for nuke just in case (remove if you don't have them)
    await ns.nuke(server);
    await ns.backdoor(server); // Forgot what this does lol

};
/** @param {NS} ns // placing these are annoying */
async function main(ns) {
    if (server == "") {
        let server = [
            "n00dles", // Hacking Level: 1
            "foodnstuff", // Hacking Level: 1
            "sigma-cosmetics", // Hacking Level: 5
            "joesguns", // Hacking Level: 10
            "hong-fang-tea", // Hacking Level: 30
            "harakri-sushi", // Hacking Level: 40
            "iron-gym" // Hacking Level: 100
        ]; // All top level servers (Edit this if you don't have enough hacking skill)

        while (true) {
            for (let i = 0; i < server.length; i++) {
                await ns.run('./attack.w.js' + server[i]); // Run the attack script for each server
            }
        }
    }
    else {
        if (ns.hasRootAccess === false) {
            await rootthings() // if we don't have root access, get it
            ns.run('./attack.w.js', server); // run the attack script after getting root access
        }
        else {
            ns.run('./attack.w.js ' + server) // if we do have root access, start getting money :)
        };
}};

/*TODO:\
- [X] Check if user has root access
- [X] If above requirements met, hack server
- [X] (OPTIONAL) Backdoor, grow, weaken, and hack on a timed delay
- [X] Create a list of servers to run the attack on if server is not specified
- [ ] Test script
*/
