module.exports = (sequelize, DataTypes) => {
  const Metadata = sequelize.define(
    "Metadata",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      metadata_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      agency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "agencies",
          key: "agency_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      product_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contact_organisation :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      compiling_agency:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contact_details :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_description :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      classification_system:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sector_coverage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      statistical_concepts_and_definitions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      statistical_unit:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      statistical_population :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reference_period:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_confidentiality:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      legal_acts_and_other_agreements:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_sharing:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      release_policy:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      release_calendar:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      frequency_of_dissemination:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_access :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      documentation_on_methodology:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quality_documentation:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quality_assurance:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quality_assessment:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sampling_error:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      timeliness:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comparability_overtime:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      coherence:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      source_data_type:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      frequency_of_data_collection:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_collection_method:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_validation :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_compilation :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      metadata_last_posted  :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      metadata_last_update :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      latest_version: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      released_data_link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_by: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "metadata",
      timestamps: false,
      underscored: true,
    }
  );

  Metadata.associate = (models) => {
    Metadata.belongsTo(models.Agency, {
      foreignKey: "agency_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Metadata;
};
