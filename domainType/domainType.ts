const domainType = (domains: string[]): string[] => {
   enum DomainType {
      commercial = ".com",
      organization = ".org",
      network = ".net",
      information = ".info"
   }
   return domains.map((domain: string): string => {
     if (domain.endsWith(DomainType.commercial)) {
        return "commercial"
     } else if (domain.endsWith(DomainType.organization)) {
        return "organization"
     } else if (domain.endsWith(DomainType.information)) {
        return "information";
     } else {
        return "network"
     }
   })
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));