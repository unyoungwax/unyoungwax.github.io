---
layout: post
title:  "Comparison between the processes of TEAMMATES and OpenKeychain"
date:   2016-03-27 15:44:36 +0800
categories: jekyll update
---

After working on my major project(TEAMMATES) and minor project(OpenKeychain) for some time, I have a basic idea of the similarities as well as the differences between the development processes of the two projects.

Both TEAMMATES and OpenKeychain follow a development process similar to the GitHub Flow (detailed explanations can be found on [GitHub Guides](https://guides.github.com/introduction/flow/)). Github Flow allows different features of a project being developed in different branches simultaneously. After implementing a feature, the contributor submits a pull request for code review. If the pull request is reviewed and passes all the tests, the new feature is deployed to the production branch.

The development processes of both TEAMMATES and OpenKeychain capture the main idea of the Github Flow, but these two projects adapt it in different ways. In the TEAMMATES development process, after a pull request is reviewed, the developer has to obtain approval from the project managers before merging the development branch to the production branch. This step allows the pull request to be examined more thoroughly to ensure better code quality and reduce hard-to-spot bugs in the code. However, this is a time-consuming process and it requires significant effort from the project managers.

It is recommended to assign more than one core developers to review a pull request at the same time. This way a pull request is still subjected to thorough examination but the amount of time required for the reviewing process is reduced. On the flip side of the coin, this may increase the workload of the core developers. Therefore core developers who are relatively free are encouraged to volunteer to review a pull request to balance out the workload.

On the other hand, unlike TEAMMATES, OpenKeychain allows partial implementation of the new feature in a pull request. The contributor who submitted the pull request can receive help from more than one core developers to resolve problems that might arise due to the pull request. The core developers also help to check the code quality of the pull request and are responsible for merging the pull request to the production branch. This workflow is more friendly to the contributors who are new to the project because they are assisted by the core developers during the implementation process. However, this can cause the pull request to remain unmerged for a very long time. It is difficult for the core developers to keep up with the updates in the pull request because they may have forgotten the details.

To solve this problem, core developers can try to estimate the amount of time needed to finish the implementation of the new feature and set a deadline for the pull request. The deadline can serve as a reminder for the contributor so that he/she remembers to update the development branch on time. The deadline need not be fixed, it can be brought forward or postponed based on the difficulty of the issue or the effort required. This way the pull requests will not remain inactive for too long and accumulate to a large number.

As a conclusion, the development processes of both TEAMMATES and OpenKeychain serve the purpose of developing a project in an orderly manner well. However, there is still room for improvement for both processes and they should continue to adapt to new changes.

