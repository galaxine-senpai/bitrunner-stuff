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
/**
 * @param {NS} ns // placing these are annoying 
 * @param {String} server // The server to hack
*/
export async function main(ns, server) {
    ns.tprint(`Type of server is ${typeof server} and value is ${server}`);
    ns.tprint("The check will be" + (server == ""))
    if (server === undefined) {
        var server = [
            "n00dles", // Hacking Level: 1
            "foodnstuff", // Hacking Level: 1
            "sigma-cosmetics", // Hacking Level: 5
            "joesguns", // Hacking Level: 10
            "hong-fang-tea", // Hacking Level: 30
            "harakiri-sushi", // Hacking Level: 40
            "iron-gym" // Hacking Level: 100
        ]; // All top level servers (Edit this if you don't have enough hacking skill)

        while (true) { // infinite loop

            await ns.sleep(50);
            ns.tprint(server)
            for (var i = 0; i < server.length; i++) {
                if (ns.hasRootAccess(server) == false) { // checks if you have root access
                    await rootthings(ns, server); // if false, get root access
                }

                await ns.run("attack.w.js", 1, server[i]); // Run the attack script for each server\
            }
        }
    }
    else {
        if (ns.hasRootAccess === false) {
            await rootthings() // if we don't have root access, get it
            await ns.run("attack.w.js", 1); // run the attack script after getting root access
        }
        else {
            await ns.run("attack.w.js", 1); // if we do have root access, start getting money :)
        };
    }
};
