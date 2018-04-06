DROP DATABASE IF EXISTS clinvitae;
CREATE DATABASE clinvitae;

\connect clinvitae;

DROP TABLE IF EXISTS invariants;

CREATE TABLE invariants
(
  VariantID serial NOT NULL,
  Gene varchar(45) DEFAULT NULL,
  NucleotideChange varchar(1000) DEFAULT NULL,
  ProteinChange varchar(1000) DEFAULT NULL,
  OtherMappings varchar(8000) DEFAULT NULL,
  Alias varchar(1000) DEFAULT NULL,
  Transcripts varchar(1000) DEFAULT NULL,
  Region varchar(1000) DEFAULT NULL,
  ReportedClassification varchar(1000) DEFAULT NULL,
  InferredClassification varchar(1000) DEFAULT NULL,
  Source varchar(1000) DEFAULT NULL,
  LastEvaluated varchar(1000) DEFAULT NULL,
  LastUpdated varchar(1000) DEFAULT NULL,
  URL varchar(1000) DEFAULT NULL,
  SubmitterComment varchar(8000) DEFAULT NULL,
  Assembly varchar(1000) DEFAULT NULL,
  Chr varchar(1000) DEFAULT NULL,
  GenomicStart varchar(1000) DEFAULT NULL,
  GenomicStop varchar(1000) DEFAULT NULL,
  Ref varchar(1000) DEFAULT NULL,
  Alt varchar(1000) DEFAULT NULL,
  Accession varchar(1000) DEFAULT NULL,
  ReportedRef varchar(1000) DEFAULT NULL,
  ReportedAlt varchar(1000) DEFAULT NULL,
  PRIMARY KEY (VariantID)
);

\copy invariants (Gene, NucleotideChange, ProteinChange, OtherMappings, Alias, 	Transcripts, Region, ReportedClassification, InferredClassification, Source, LastEvaluated, LastUpdated, URL, SubmitterComment, Assembly, Chr, GenomicStart, GenomicStop, Ref, Alt, Accession, ReportedRef, ReportedAlt) from 'variant_results.csv' DELIMITER ',' csv header;
 