# Mean Time to Resolution

## Description

The Mean Time to Resolution describes the development team's capability to respond to tickets. It assesses the mean time it took to resolve tickets with a specific label, i.e. the time from creating a ticket to closing a ticket.

If a ticket is not closed yet, we assume the computation date as the closing date of the ticket, to take this ticket into account for the mean resolution time.

We calculate this information point for issues with a given label.

## Calculation

```
(issues[label = "labelName"]) => {
    return avg([timeToResolution(labelName) for label in issues])
}
```

## Related Data

- [Issues](Issue.md): `label`
- [Time To Resolution](TimeToResolution.md)
- [Overall Mean Time To Resolution](OverallMeanTimeToResolution.md)
