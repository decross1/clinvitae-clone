library(readr)
variant_results <- read_delim("Documents/GitHub/clinvitae/database/variant_results.tsv", 
+     "\t", escape_double = FALSE, trim_ws = TRUE)

write_csv(variant_results, path = "Documents/GitHub/clinvitae/database/variant_results.csv")