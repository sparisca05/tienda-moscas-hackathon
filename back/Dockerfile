FROM openjdk:19-jdk-alpine

WORKDIR /back

COPY pom.xml /back
COPY .mvn /back/.mvn
COPY mvnw /back
COPY .env /back

RUN ./mvnw dependency:go-offline

# COPIAR EL CODIGO FUENTE DENTRO DEL CONTENEDOR
COPY src /back/src

# CONSTRUIR NUESTRA APLICACION
RUN ./mvnw clean install -DskipTests

# EJECUTAR LA APLICACION
CMD ["java", "-jar", "target/tiendamoscas-0.0.1-SNAPSHOT.jar"]