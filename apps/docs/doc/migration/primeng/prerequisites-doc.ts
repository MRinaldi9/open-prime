import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppCode } from '@/components/doc/app.code';

@Component({
    selector: 'prerequisites-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                Your project must be on PrimeNG v21 before migrating, as Optimus UI v1 mirrors the PrimeNG v21 API. If you are on an older version, update PrimeNG first by following its
                <a href="https://v21.primeng.org/migration/v21" target="_blank" rel="noopener noreferrer">v21 migration guide</a>.
            </p>
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
            <p>
                The migration schematic verifies this requirement and aborts when PrimeNG is missing or older than v21. The check can be bypassed with the <i>--force</i> flag, for example in workspaces where the dependency is declared in a
                non-standard location.
            </p>
        </app-docsectiontext>
    `
})
export class PrerequisitesDoc {
    code: Code = {
        command: `ng update primeng@21`
    };
}
