import { of, from } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

const data = [
  { groupId: "QA", value: 1 },
  { groupId: "Development", value: 3 },
  { groupId: "QA", value: 5 },
  { groupId: "Development", value: 6 },
  { groupId: "QA", value: 2 },
];

from(data)
  .pipe(
    groupBy((item) => item.groupId)
    // mergeMap((group) => group.pipe(toArray()))
  )
  .subscribe((x) => console.log(x));
