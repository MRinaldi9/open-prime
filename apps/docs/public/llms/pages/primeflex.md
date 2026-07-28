# PrimeFlex

Moving from PrimeFlex to Tailwind CSS.

## Compatibility-

The compatible versions to choose the correct combination. PrimeNG v18 and newer PrimeFlex v4 PrimeNG v17 and older PrimeFlex v3

## Migration-

The primeclt is a command line utility to assist project setup and migration. The pf2tw command is created for smooth migration between PrimeFlex to Tailwind CSS. For flawless migration, it is highly suggested to use Optimus UI v18 as the requirement of the tailwindcss plugin. Install PrimeCLT. Run the pf2wt in a directory that contains files to be migrated. There are a couple of utility classes that are not migrated as they have no counterparts, use flexbox utilities instead as replacements. formgrid formgroup formgroup-inline col col-fixed field field-checkbox field-radiobutton reset

## Overview-

PrimeFlex is designed to be a lightweight CSS utility to accompany Optimus UI. The team has decided to avoid the maintenance of a CSS library and utilize the resources on improving the UI libraries instead. Community feedback has been essential in this decision as well since majority of the applications have their own CSS utilities whether it is Tailwind, Bootstrap or an in-house one, as a result adding PrimeFlex to a project was causing overlapping functionality.

## Tailwindcss-

Tailwind CSS in particular is a popular choice, we have even built the whole showcase with Tailwind CSS. Website templating demos have been migrated from PrimeFlex to Tailwind and a converter tool called pf2tw has been created. In summary, Optimus UI officially suggests Tailwind CSS as the replacement for PrimeFlex.

