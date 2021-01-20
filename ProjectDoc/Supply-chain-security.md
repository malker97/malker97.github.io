# 已经在组内被放弃了，如果有需要请自取


# Title: Supply-chain security codelabs and CTF (Capture-the-Flag) game

# How interesting will this be?
If you are interested in software security, malware reverse engineering, network security, or CTF, I can say that this is a very interesting and exciting project.


# Background Knowledge:

Most of our programming activities now rely on existing libraries(C or C++: iostream; python date; Javascript: Bootstrap ), These softwares are usually obtained from the Internet using corresponding package management tools (gcc, g++, pip/pip3, npm,brew, apt, [XcodeGhost Event](https://en.wikipedia.org/wiki/XcodeGhost)).
Under normal circumstances, we default that these channels are safe and stable to the dependent environment we need.
However, this is not always safe and stable.
[Securing the Software Supply Chain with a Software Bill of Materials](https://thenewstack.io/securing-the-software-supply-chain-with-a-software-bill-of-materials/)
https://thenewstack.io/securing-the-software-supply-chain-with-a-software-bill-of-materials/

What is CTF:
https://www.wikiwand.com/en/Capture_the_flag Computer security Part

# what are the project:
It is important to show those who are learning software development the risks involved in including code and how to minimize those risks.
[ A recent report has shown that 70% of applications contain library-induced vulnerabilities ](https://www.techrepublic.com/article/open-source-security-report-finds-library-induced-flaws-in-70-of-applications/)
and another has shown that, on average, [open-source developers spend less than 3% of their time improving the security of their code](https://www.linuxfoundation.org/blog/2020/12/download-the-report-on-the-2020-foss-contributor-survey/)
> Most software is not as stable as we think. Because the dependent environment of the call may itself have problems.

# what are the project requirements/expectations?
JUST LIKE [OWASP ASVS Github](https://github.com/OWASP/ASVS/tree/v4.0.2#latest-stable-version---402)
To demonstrate the issues with package supply chains, we are looking to build a set of introductory codelabs and a supply-chain CTF with multiple levels mimicking actual supply-chain attacks for use in courses.  These exercises will show players how to examine software applications in a repository and
1. Identify the number of developers that the application relies upon for security and their identities of those developers.
+ Trusted Publishers Certificate Store [MicroSoft Trusted Publishers Certificate Store](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/trusted-publishers-certificate-store)
2. Identify packages the application relies upon that have not had a commit in over a year and may have been abandoned.
+ Ubuntu ```apt-cache rdepends packagename```
+ Windows VisualStudio -> dumpbin 
> Visual Studio 20\*\*->Visual Studio Tools -> dumpbin  OR just read *.dll file
3. Identify packages with known, unpatched, CVEs associated with them via automated software component analysis (SCA) tools such as WhiteSource Advise, Snyk, or other free tools.
4. Identify a maintainer whose account, if compromised, would have the greatest impact on the application's supply chain.
+ This is more like obtaining an alternate software source? ``` vim /etc/apt/sources.list ```

# Is there any external cost? (as is the case with google maps)
We need at least one (AWS or GCP)server as the backend, if we want to do something like [Virustotal.com](https://www.virustotal.com/gui/) ,we also need a frontend.
and We Probb need buy some api of sofeware info.
# How hard will this be?
Hard or General difficulty
# What knowledge do we need
* Git and Github
* Front end
* Back end
* Malware reverse engineering
* Docker(Might need)
* Bash(Might need)


 